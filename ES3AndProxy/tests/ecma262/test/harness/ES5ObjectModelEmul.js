/*
 * Primitive objects are reduced to get/set/has/delete (map with sugar and inheritance)
 * ES5 objects are proxies wrapping these primitive objects
 *
 * Values are stored directly on the target (if data property)
 * Prop descs are accessed through WeakMap (object) + Map (name) (may be expensive, looking forward to private symbols)
 *
 * TODO implement ES5 descriptor algorithms (or rather steal from Tomvc, I think he has written them somewhere already)
 * TODO import test262 test suite
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

    var proxyToPropDescMap = new WeakMap();
    var notExtensibleObjects = new Set(); // ought to be a WeakSet...
    //var proxyToHandler = new WeakMap();

    var isEmulatedObject = proxyToPropDescMap.has.bind(proxyToPropDescMap);

    var es5ObjectHandler =  {
        get: function(target, name, receiver){
            // climb prop chain to find a getter
            // call if found
            // otherwise, get
            return target[name];
        },
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
            proxyToPropDescMap.set(p, new Map());
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
        var propDescMap = proxyToPropDescMap.get(o);
        if(!propDescMap)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");

        var propDesc = propDescMap.get(name);
        propDesc = propDesc || {};

        // TODO look up the spec for exact Object.defineProperty
        // make sure to consider [[extensible]]
        // For now, it'll just replace the current propdesc
        propDescMap.set(name, desc);
    };

    ObjectReplacement.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(o, name){
        var propDescMap = proxyToPropDescMap.get(o);
        if(!propDescMap)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");

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
        var propDescMap = proxyToPropDescMap.get(o);
        if(!propDescMap)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");

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

