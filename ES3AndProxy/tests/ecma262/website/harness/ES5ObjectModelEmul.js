/*
 * Primitive objects are reduced to get/set/has/delete (map with sugar and inheritance)
 * ES5 objects are proxies wrapping these primitive objects
 *
 * Values are stored directly on the target (if data property)
 * Prop descs are accessed through WeakMap (object) + Map (name)
 *
 * A lot of code has been copied from https://github.com/tvcutsem/harmony-reflect/blob/master/reflect.js. Copyright header:
 * // Copyright (C) 2011-2012 Software Languages Lab, Vrije Universiteit Brussel
 * // This code is dual-licensed under both the Apache License and the MPL
 *
 * */



(function(global){
    "use strict";
    var Object = global.Object;

    // Encapsulating the Object.defineProperty capability to set a value as own property
    var setOwnValue = (function(){
        var defProp = Object.defineProperty;

        return function setOwnValue(o, name, val){
            return defProp(o, name, {
                value: val,
                enumerable: true,
                configurable: true,
                writable: true
            });
        };
    })();

    // To not be tempted to cheat ;-)
    // removing native capabilities. Can't call traps after that
    delete Object.defineProperty;
    delete Object.defineProperties;
    delete Object.getOwnPropertyDescriptor;
    delete Object.keys;
    delete Object.seal;
    delete Object.freeze;
    delete Object.preventExtensions;
    delete Object.isSealed;
    delete Object.isFrozen;
    delete Object.isExtensible;


    var targetToPropDescMap = new WeakMap();
    var proxyToTarget = new WeakMap();
    var notExtensibleObjects = new Set(); // ought to be a WeakSet...
    //var proxyToHandler = new WeakMap();

    // ==============================
    function isStandardAttribute(name) {
        return /^(get|set|value|writable|enumerable|configurable)$/.test(name);
    }

// Adapted from ES5 section 8.10.5
    function toPropertyDescriptor(obj) {
        if (Object(obj) !== obj) {
            throw new TypeError("property descriptor should be an Object, given: "+
                obj);
        }
        var desc = {};
        if ('enumerable' in obj) { desc.enumerable = !!obj.enumerable; }
        if ('configurable' in obj) { desc.configurable = !!obj.configurable; }
        if ('value' in obj) { desc.value = obj.value; }
        if ('writable' in obj) { desc.writable = !!obj.writable; }
        if ('get' in obj) {
            var getter = obj.get;
            if (getter !== undefined && typeof getter !== "function") {
                throw new TypeError("property descriptor 'get' attribute must be "+
                    "callable or undefined, given: "+getter);
            }
            desc.get = getter;
        }
        if ('set' in obj) {
            var setter = obj.set;
            if (setter !== undefined && typeof setter !== "function") {
                throw new TypeError("property descriptor 'set' attribute must be "+
                    "callable or undefined, given: "+setter);
            }
            desc.set = setter;
        }
        if ('get' in desc || 'set' in desc) {
            if ('value' in desc || 'writable' in desc) {
                throw new TypeError("property descriptor cannot be both a data and an "+
                    "accessor descriptor: "+obj);
            }
        }
        return desc;
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

    function toCompletePropertyDescriptor(desc) {
        var internalDesc = toPropertyDescriptor(desc);
        if (isGenericDescriptor(internalDesc) || isDataDescriptor(internalDesc)) {
            if (!('value' in internalDesc)) { internalDesc.value = undefined; }
            if (!('writable' in internalDesc)) { internalDesc.writable = false; }
        } else {
            if (!('get' in internalDesc)) { internalDesc.get = undefined; }
            if (!('set' in internalDesc)) { internalDesc.set = undefined; }
        }
        if (!('enumerable' in internalDesc)) { internalDesc.enumerable = false; }
        if (!('configurable' in internalDesc)) { internalDesc.configurable = false; }
        return internalDesc;
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

    /**
     * Returns a fresh property descriptor that is guaranteed
     * to be complete (i.e. contain all the standard attributes).
     * Additionally, any non-standard enumerable properties of
     * attributes are copied over to the fresh descriptor.
     *
     * If attributes is undefined, returns undefined.
     *
     * See also: http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics
     */
    function normalizeAndCompletePropertyDescriptor(attributes) {
        if (attributes === undefined) { return undefined; }
        var desc = toCompletePropertyDescriptor(attributes);
        // Note: no need to call FromPropertyDescriptor(desc), as we represent
        // "internal" property descriptors as proper Objects from the start
        for (var name in attributes) {
            if (!isStandardAttribute(name)) {
                Object.defineProperty(desc, name,
                    { value: attributes[name],
                        writable: true,
                        enumerable: true,
                        configurable: true });
            }
        }
        return desc;
    }

    /**
     * Returns a fresh property descriptor whose standard
     * attributes are guaranteed to be data properties of the right type.
     * Additionally, any non-standard enumerable properties of
     * attributes are copied over to the fresh descriptor.
     *
     * If attributes is undefined, will throw a TypeError.
     *
     * See also: http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics
     */
    function normalizePropertyDescriptor(attributes) {
        var desc = toPropertyDescriptor(attributes);
        // Note: no need to call FromGenericPropertyDescriptor(desc), as we represent
        // "internal" property descriptors as proper Objects from the start
        for (var name in attributes) {
            if (!isStandardAttribute(name)) {
                Object.defineProperty(desc, name,
                    { value: attributes[name],
                        writable: true,
                        enumerable: true,
                        configurable: true });
            }
        }
        return desc;
    }

    var Reflect = {
        /*getOwnPropertyDescriptor: function(target, name) {
            return Object.getOwnPropertyDescriptor(target, name);
        },
        getOwnPropertyNames: function(target) {
            return Object.getOwnPropertyNames(target);
        },
        defineProperty: function(target, name, desc) {

            // if target is a proxy, invoke its "defineProperty" trap
            var handler = directProxies.get(target);
            if (handler !== undefined) {
                return handler.defineProperty(target, name, desc);
            }

            // Implementation transliterated from [[DefineOwnProperty]]
            // see ES5.1 section 8.12.9
            // this is the _exact same algorithm_ as the isCompatibleDescriptor
            // algorithm defined above, except that at every place it
            // returns true, this algorithm actually does define the property.
            var current = Object.getOwnPropertyDescriptor(target, name);
            var extensible = Object.isExtensible(target);
            if (current === undefined && extensible === false) {
                return false;
            }
            if (current === undefined && extensible === true) {
                Object.defineProperty(target, name, desc); // should never fail
                return true;
            }
            if (isEmptyDescriptor(desc)) {
                return true;
            }
            if (isEquivalentDescriptor(current, desc)) {
                return true;
            }
            if (current.configurable === false) {
                if (desc.configurable === true) {
                    return false;
                }
                if ('enumerable' in desc && desc.enumerable !== current.enumerable) {
                    return false;
                }
            }
            if (isGenericDescriptor(desc)) {
                // no further validation necessary
            } else if (isDataDescriptor(current) !== isDataDescriptor(desc)) {
                if (current.configurable === false) {
                    return false;
                }
            } else if (isDataDescriptor(current) && isDataDescriptor(desc)) {
                if (current.configurable === false) {
                    if (current.writable === false && desc.writable === true) {
                        return false;
                    }
                    if (current.writable === false) {
                        if ('value' in desc && !sameValue(desc.value, current.value)) {
                            return false;
                        }
                    }
                }
            } else if (isAccessorDescriptor(current) && isAccessorDescriptor(desc)) {
                if (current.configurable === false) {
                    if ('set' in desc && !sameValue(desc.set, current.set)) {
                        return false;
                    }
                    if ('get' in desc && !sameValue(desc.get, current.get)) {
                        return false;
                    }
                }
            }
            Object.defineProperty(target, name, desc); // should never fail
            return true;
        },
        deleteProperty: function(target, name) {
            return nonstrictDelete(target, name);
        },
        getPrototypeOf: function(target) {
            return Object.getPrototypeOf(target);
        },
        freeze: function(target) {
            Object.freeze(target);
            return true;
        },
        seal: function(target) {
            Object.seal(target);
            return true;
        },
        preventExtensions: function(target) {
            Object.preventExtensions(target);
            return true;
        },
        isExtensible: function(target) {
            return Object.isExtensible(target);
        },
        isSealed: function(target) {
            return Object.isSealed(target);
        },
        isFrozen: function(target) {
            return Object.isFrozen(target);
        },
        has: function(target, name) {
            return name in target;
        },
        hasOwn: function(target, name) {
            return ({}).hasOwnProperty.call(target, name);
        },*/
        get: function(target, name, receiver) {
            receiver = receiver || target;

            var desc = targetToPropDescMap.get(target).get(name);
            if (desc === undefined) {
                var proto = Object.getPrototypeOf(target);
                if (proto === null) {
                    return undefined;
                }
                return Reflect.get(proto, name, receiver);
            }
            if (isDataDescriptor(desc)) {
                return desc.value;
            }
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return desc.get.call(receiver);
        }/*,
        // Reflect.set implementation based on latest version of [[SetP]] at
        // http://wiki.ecmascript.org/doku.php?id=harmony:proto_climbing_refactoring
        set: function(target, name, value, receiver) {
            receiver = receiver || target;

            // if target is a proxy, invoke its "set" trap
            var handler = directProxies.get(target);
            if (handler !== undefined) {
                return handler.set(receiver, name, value);
            }

            // first, check whether target has a non-writable property
            // shadowing name on receiver
            var ownDesc = Object.getOwnPropertyDescriptor(target, name);
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
                    var updateDesc =
                    { value: value,
                        // FIXME: it should not be necessary to describe the following
                        // attributes. Added to circumvent a bug in tracemonkey:
                        // https://bugzilla.mozilla.org/show_bug.cgi?id=601329
                        writable: existingDesc.writable,
                        enumerable: existingDesc.enumerable,
                        configurable: existingDesc.configurable };
                    Object.defineProperty(receiver, name, updateDesc);
                    return true;
                } else {
                    if (!Object.isExtensible(receiver)) return false;
                    var newDesc =
                    { value: value,
                        writable: true,
                        enumerable: true,
                        configurable: true };
                    Object.defineProperty(receiver, name, newDesc);
                    return true;
                }
            }

            // name is not defined in target, search target's prototype
            var proto = Object.getPrototypeOf(target);
            if (proto === null) {
                // target was the last prototype, now we know that 'name' is not shadowed
                // by an existing (accessor or data) property, so we can add the property
                // to the initial receiver object
                if (!Object.isExtensible(receiver)) return false;
                var newDesc =
                { value: value,
                    writable: true,
                    enumerable: true,
                    configurable: true };
                Object.defineProperty(receiver, name, newDesc);
                return true;
            }
            // continue the search in target's prototype
            return Reflect.set(proto, name, value, receiver);
        },
        enumerate: function(target) {
            var result = [];
            for (var name in target) { result.push(name); };
            return result;
        },
        iterate: function(target) {
            // in ES-next: for (var name of target) { ... }
            var handler = directProxies.get(target);
            if (handler !== undefined) {
                return handler.iterate(handler.target);
            }

            // non-standard iterator support, used today
            if ('__iterator__' in target) return target.__iterator__;

            var result = Reflect.enumerate(target);
            var l = +result.length;
            var idx = 0;
            return {
                next: function() {
                    if (idx === l) throw StopIteration;
                    return result[idx++];
                }
            };
        },
        keys: function(target) {
            return Object.keys(target);
        },
        apply: function(target, receiver, args) {
            // target.apply(receiver, args)
            return Function.prototype.apply.call(target, receiver, args);
        },
        construct: function(target, args) {
            // return new target(...args);

            // if target is a proxy, invoke its "construct" trap
            var handler = directProxies.get(target);
            if (handler !== undefined) {
                return handler.construct(handler.target, args);
            }

            var proto = target.prototype;
            var instance = (Object(proto) === proto) ? Object.create(proto) : {};
            var result = Function.prototype.apply.call(target, instance, args);
            return Object(result) === result ? result : instance;
        }*/
    };

    // ==============================



    var isEmulatedObject = proxyToPropDescMap.has.bind(proxyToPropDescMap);

    var es5ObjectHandler =  {
        get: Reflect.get,
        set: function(target, name, value, receiver){
            console.log('set trap', Array.prototype.slice.call(arguments, 0));

            if(! (name in target) && notExtensibleObjects.has(receiver))
                throw new TypeError("Can't add a property to a non-extensible object")

            setOwnValue(target, name, value);

            // if(this.extensible) SetOwnValue(target or receiver?, name, value);
        },
        delete: function(target, name){
            var desc = this.propDescMap.get(name);
            if(desc.configurable === false){
                throw new Error(['Property', name, 'is not configurable, so it cannot be deleted'].join(' '))
            }
            this.propDescMap.remove(name);
            return delete target[name];
        },
        has: function(target, name){

        },
        enumerate: function(target){

        }
    };

    function makeEmulated(target){
        if(Object(target) !== target) // primitive values
            return target;

        if(isEmulatedObject(target))
            return target;
        else{
            var p = new Proxy(target, es5ObjectHandler);
            proxyToTarget.set(p, target);
            targetToPropDescMap.set(target, new Map()); // this map could as well be an object
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

    ObjectReplacement.makeEmulated = makeEmulated;

    // copy remaining properties
    for(var p in Object){
        if(Object.hasOwnProperty(p)){
            ObjectReplacement[p] = Object[p];
        }
    }

    // replacing native Object.create
    ObjectReplacement.create = function(proto, propMap){
        return makeEmulated(Object.create(proto, propMap));
    }; // second argument ignored

    ObjectReplacement.defineProperty = function defineProperty(o, name, desc){
        //console.log('new Object.defineProperty');
        var target = proxyToTarget.get(o);
        if(!target)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        var propDescMap = targetToPropDescMap.get(o);

        var propDesc = propDescMap.get(name);
        propDesc = propDesc || {};

        // TODO look up the spec for exact Object.defineProperty
        // make sure to consider [[extensible]]
        // For now, it'll just replace the current propdesc
        propDescMap.set(name, desc);
    };

    ObjectReplacement.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(o, name){
        var target = proxyToTarget.get(o);
        if(!target)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        var propDescMap = targetToPropDescMap.get(o);

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
        return notExtensibleObjects.add(o);
    };
    ObjectReplacement.isExtensible = function isExtensible(o){
        return !notExtensibleObjects.has(o);
    };

    ObjectReplacement.keys = function keys(o){
        var target = proxyToTarget.get(o);
        if(!target)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");
        var propDescMap = targetToPropDescMap.get(o);

        var ret = [];

        for(var p of this.propDescMap){
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
            return makeEmulated(o);
        }

        if(typeof o === 'function'){
            return function(){
                return makeEmulated(o.apply(this, arguments));
            }
        }

        throw new Error('Not supposed to wrap something else than an object')
    }

})(this);

