/*
 * Primitive objects are reduced to get/set/has/delete (map with sugar and inheritance)
 * ES5 objects are proxies wrapping these primitive objects
 *
 * Values are stored directly on the target (if data property)
 * Prop descs are accessed through WeakMap (object) + Map (name) (may be expensive, looking forward to private symbols)
 *
 * A lot of code has been copied from https://github.com/tvcutsem/harmony-reflect/blob/master/reflect.js. Copyright header:
 * // Copyright (C) 2011-2012 Software Languages Lab, Vrije Universiteit Brussel
 * // This code is dual-licensed under both the Apache License and the MPL
 *
 * */

(function(global){
    "use strict";
    var Object = global.Object;
    if(window.top !== window){
        global.console = {
            log: function(){
                var topConsole = window.top.console;
                topConsole.log.apply(topConsole, ['test iframe:'].concat(arguments))
            }
        };
    }

    // Encapsulating the Object.defineProperty capability to set a value as own property
    var setOwnValue = (function(){
        var defProp = Object.defineProperty;

        return function setOwnValue(o, name, val){
            defProp(o, name, {
                value: val,
                writable: true,
                enumerable: true,
                configurable: true
            });
            o[name] = val; // circumvanting a debugger (and engine?) bug
        };
    })();

    // To not be tempted to cheat ;-)
    // removing native capabilities. Can't call traps after that
    delete Object.defineProperty;
    delete Object.defineProperties;
    //delete Object.getOwnPropertyDescriptor;
    delete Object.keys;
    delete Object.seal;
    delete Object.freeze;
    delete Object.preventExtensions;
    delete Object.isSealed;
    delete Object.isFrozen;
    delete Object.isExtensible;

    var targetToPropDescMap = new WeakMap();
    var proxyToTarget = new WeakMap();
    var targetToProxy = new WeakMap();
    var notExtensibleObjects = new Set(); // ought to be a WeakSet...
    var isNotExtensible = notExtensibleObjects.has.bind(notExtensibleObjects);

    //var proxyToHandler = new WeakMap();gopd

    // copied from http://wiki.ecmascript.org/doku.php?id=harmony:egal
    function sameValue(x, y) {
        if (x === y) {
            // 0 === -0, but they are not identical
            return x !== 0 || 1 / x === 1 / y;
        }

        // NaN !== NaN, but they are identical.
        // NaNs are the only non-reflexive value, i.e., if x !== x,
        // then x is a NaN.
        // isNaN is broken: it converts its argument to number, so
        // isNaN("foo") => true
        return x !== x && y !== y;
    }
    function isAccessorDescriptor(desc) {
        if (desc === undefined) return false;
        return ('get' in desc || 'set' in desc);
    }
    function isDataDescriptor(desc) {
        if (desc === undefined) return false;
        return ('value' in desc || 'writable' in desc);
    }
    function isGenericDescriptor(desc) {
        if (desc === undefined) return false;
        return !isAccessorDescriptor(desc) && !isDataDescriptor(desc);
    }
    function isEmptyDescriptor(desc) {
        return !('get' in desc) &&
            !('set' in desc) &&
            !('value' in desc) &&
            !('writable' in desc) &&
            !('enumerable' in desc) &&
            !('configurable' in desc);
    }

    function isEquivalentDescriptor(desc1, desc2) {
        return sameValue(desc1.get, desc2.get) &&
            sameValue(desc1.set, desc2.set) &&
            sameValue(desc1.value, desc2.value) &&
            sameValue(desc1.writable, desc2.writable) &&
            sameValue(desc1.enumerable, desc2.enumerable) &&
            sameValue(desc1.configurable, desc2.configurable);
    }



    var isEmulatedObject = proxyToTarget.has.bind(proxyToTarget);

    var es5ObjectHandler =  {
        get: function(target, name, receiver){
            // receiver = receiver || target;

            var propDescMap = targetToPropDescMap.get(target);
            if(!propDescMap)
                throw new Error("Unsupported object. Did you create it with 'new Object()'?");
            var desc = propDescMap.get(name);

            if (desc === undefined) {
                var proto = ObjectReplacement.getPrototypeOf(target);
                if (proto === null) {
                    return undefined;
                }
                proto = proxyToTarget.get(proto) || proto;
                return this.get(proto, name, receiver);
            }
            if (isDataDescriptor(desc)) {
                return desc.value;
            }
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return desc.get.call(receiver);
        },
        set: function(target, name, value, receiver){
            //console.log('set trap', Array.prototype.slice.call(arguments, 0));
            // receiver = receiver || target;
            var newDesc;
            var propDescMap = targetToPropDescMap.get(target);
            if(!propDescMap)
                throw new Error("Unsupported object. Did you create it with 'new Object()'?");

            var receiverTarget = proxyToTarget.get(receiver) || receiver;
            var receiverPropDescMap = targetToPropDescMap.get(receiverTarget);
            // first, check whether target has a non-writable property
            // shadowing name on receiver
            var ownDesc = propDescMap.get(name);

            if (ownDesc !== undefined) {
                if (isAccessorDescriptor(ownDesc)) {
                    var setter = ownDesc.set;
                    if (setter === undefined) return false;
                    setter.call(receiver, value); // assumes Function.prototype.call
                    return true;
                }
                // otherwise, isDataDescriptor(ownDesc) must be true
                if (ownDesc.writable === false) return false;
                // we found an existing writable data property on the prototype chain.
                // Now update or add the data property on the receiver, depending on
                // whether the receiver already defines the property or not.
                var existingDesc = Object.getOwnPropertyDescriptor(receiver, name);
                if (existingDesc !== undefined) {
                    var updateDesc = {
                        value: value,
                        // FIXME: it should not be necessary to describe the following
                        // attributes. Added to circumvent a bug in tracemonkey:
                        // https://bugzilla.mozilla.org/show_bug.cgi?id=601329
                        writable: existingDesc.writable,
                        enumerable: existingDesc.enumerable,
                        configurable: existingDesc.configurable
                    };

                    receiverPropDescMap.set(name, updateDesc);
                    receiverTarget[name] = updateDesc.value;
                    return true;
                } else {
                    if (!isNotExtensible(receiverTarget)) return false;
                    newDesc = {
                        value: value,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    };

                    receiverPropDescMap.set(name, newDesc);
                    receiverTarget[name] = newDesc.value;

                    return true;
                }
            }

            // name is not defined in target, search target's prototype
            var proto = ObjectReplacement.getPrototypeOf(target);
            if (proto === null) {
                // target was the last prototype, now we know that 'name' is not shadowed
                // by an existing (accessor or data) property, so we can add the property
                // to the initial receiver object
                if (isNotExtensible(receiverTarget)) return false;
                newDesc = {
                    value: value,
                    writable: true,
                    enumerable: true,
                    configurable: true
                };
                receiverPropDescMap.set(name, newDesc)
                return true;
            }
            // continue the search in target's prototype
            proto = proxyToTarget.get(proto) || proto;
            return this.set(proto, name, value, receiver);
        },
        delete: function(target, name){
            var target = proxyToTarget.get(o);
            if(!target)
                throw new Error("Unsupported object. Did you create it with 'new Object()'?");
            var propDescMap = targetToPropDescMap.get(target);
            var desc = propDescMap.get(name);

            if(desc && desc.configurable === false){
                throw new Error(['Property', name, 'is not configurable, so it cannot be deleted'].join(' '))
            }
            propDescMap.remove(name);
            return delete target[name];
        }
    };

    function makeEmulated(target){
        //console.log('makeEmulated')
        if(Object(target) !== target){ // primitive values
            console.log('makeEmulated primitive', typeof target);
            return target;
        }

        if(isEmulatedObject(target)){
            console.log('makeEmulated true');
            return target;
        }

        var existingProxy = targetToProxy.get(target);
        if(existingProxy){
            console.log('makeEmulated existing proxy');
            return existingProxy;
        }
        else{
            console.log('makeEmulated new');
            var p = new Proxy(target, es5ObjectHandler);
            proxyToTarget.set(p, target);
            targetToProxy.set(target, p);
            var propDescMap = new Map();
            Object.getOwnPropertyNames(target).forEach(function(name){
                propDescMap.set(name, Object.getOwnPropertyDescriptor(target, name));
            });

            targetToPropDescMap.set(target, propDescMap); // this map could as well be an object
            return p;
        }
    }

    function ObjectReplacement(val){
        "use strict"; // insisting on strictness so that 'this' defaults to undefined
        return typeof this === 'object' ?
            makeEmulated(new Object(val)) : // constructor case (or close enough)
            makeEmulated(Object(val));      // function case
    }

    ObjectReplacement.prototype = Object.prototype;
    ObjectReplacement.getPrototypeOf = function getPrototypeOf(o){
        return makeEmulated(Object.getPrototypeOf(o)); // some identity issues, but whatever?
    };
    ObjectReplacement.create = function(proto, propMap){
        var ret = makeEmulated(Object.create(proto));
        ObjectReplacement.defineProperties(ret, propMap);
        return ret;
    };
    ObjectReplacement.makeEmulated = makeEmulated;


    ObjectReplacement.defineProperty = function defineProperty(o, name, desc){
        //console.log('new Object.defineProperty');
        var target = proxyToTarget.get(o);
        if(!target)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        var propDescMap = targetToPropDescMap.get(target);
        var currentDesc = propDescMap.get(name);

        var extensible = !notExtensibleObjects.has(target);
        if (currentDesc === undefined && extensible === false) {
            throw new TypeError('non-extensible')
        }
        if (currentDesc === undefined && extensible === true) {
            setOwnValue(target, name, desc.value);
            propDescMap.set(name, desc);
            return o;
        }
        if (isEmptyDescriptor(desc) || isEquivalentDescriptor(currentDesc, desc)) {
            return o;
        }
        if (currentDesc.configurable === false) {
            if (desc.configurable === true) {
                throw new TypeError('non-configurable')
            }
            if ('enumerable' in desc && desc.enumerable !== currentDesc.enumerable) {
                throw new TypeError('non-configurable')
            }
        }
        if (isGenericDescriptor(desc)) {
            // no further validation necessary
        } else if (isDataDescriptor(currentDesc) !== isDataDescriptor(desc)) {
            if (currentDesc.configurable === false) {
                throw new TypeError('non-configurable, incompatible descs')
            }
        } else if (isDataDescriptor(currentDesc) && isDataDescriptor(desc)) {
            if (currentDesc.configurable === false) {
                if (currentDesc.writable === false && desc.writable === true) {
                    throw new TypeError('non-configurable, incompatible descs')
                }
                if (currentDesc.writable === false) {
                    if ('value' in desc && !sameValue(desc.value, currentDesc.value)) {
                        throw new TypeError('non-configurable, incompatible descs')
                    }
                }
            }
        } else if (isAccessorDescriptor(currentDesc) && isAccessorDescriptor(desc)) {
            if (currentDesc.configurable === false) {
                if ('set' in desc && !sameValue(desc.set, currentDesc.set)) {
                    throw new TypeError('non-configurable, incompatible descs')
                }
                if ('get' in desc && !sameValue(desc.get, currentDesc.get)) {
                    throw new TypeError('non-configurable, incompatible descs')
                }
            }
        }
        setOwnValue(target, name, desc.value);
        propDescMap.set(name, desc);
        return true;
    };

    ObjectReplacement.defineProperties = function defineProperties(o, propDescs){
        //console.log('new Object.defineProperties');
        var desc;
        for(var p in propDescs){
            desc = propDescs[p];
            ObjectReplacement.defineProperty(o, p, desc);
        }

    };

    ObjectReplacement.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(o, name){
        var target = proxyToTarget.get(o);
        if(!target)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        var propDescMap = targetToPropDescMap.get(target);

        return propDescMap.has(name) ?
            propDescMap.get(name) :
        {
            value:o[name], // would be faster if applied to the target directly instead of the proxy, but would require a proxy -> target lookup
            configurable: true,
            enumerable: true,
            writable: true
        };
    };

    ObjectReplacement.preventExtensions = function preventExtensions(o){
        var target = proxyToTarget.get(o);
        if(!target)
          throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        return notExtensibleObjects.add(target);
    };
    ObjectReplacement.seal = ObjectReplacement.freeze = ObjectReplacement.preventExtensions;

    ObjectReplacement.isExtensible = function isExtensible(o){
        var target = proxyToTarget.get(o);
        if(!target)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        return !notExtensibleObjects.has(target);
    };
    ObjectReplacement.isSealed = ObjectReplacement.isFrozen = ObjectReplacement.isExtensible;

    ObjectReplacement.keys = function keys(o){
        var target = proxyToTarget.get(o);
        if(!target)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        var propDescMap = targetToPropDescMap.get(target);

        var ret = [];

        for(var p of propDescMap){
            var propName = p[0]; // What sort of API is this???
            var desc = p[1];
            if(desc.enumerable === true)
                ret.push(propName);
        }

        return ret;
    };


    global.Object = ObjectReplacement;

    global.wrapTestObject = function(o){
        if(typeof o === 'object'){
            //console.log('wrapTestObject object');
            return makeEmulated(o);
        }

        if(typeof o === 'function'){
            //console.log('wrapTestObject function');
            return function(){
                return makeEmulated(o.apply(this, arguments));
            }
        }

        throw new Error('Not supposed to wrap something else than an object')
    }

})(this);
