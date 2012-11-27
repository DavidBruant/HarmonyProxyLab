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
    var proxyToHandler = new WeakMap();

    function ES5ObjectHandler(){
        this.extensible = true;
        this.propDescMap = new Map();
    }
    ES5ObjectHandler.prototype =  {
        get: function(target, name, receiver){
            // climb prop chain to find a getter
            // call if found
            // otherwise, get
        },
        set: function(target, name, value, receiver){
            console.log('set trap', Array.prototype.slice.call(arguments, 0))
            if(Object.getPrototypeOf(target)[name] = value)
                return true;
            else{


            }



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

    /**
     * Each object output of 'new Object()' is a proxy.
     *
     *
     *
     */
    // TODO do the same for all object constructors
    function objectConstructor(proto){
        var target = new Map(); // value storage
        var handler = new ES5ObjectHandler();
        var p = new Proxy(target, handler);
        proxyToHandler.set(p, handler);
        proxyToPropDescMap.set(p, handler.propDescMap);
        return p;
    }

    // TODO make this up to spec. Should behave like Object
    function ObjectReplacement(){
        return objectConstructor(Object.prototype);
    }

    ObjectReplacement.prototype = Object.prototype;

    for(var p in Object){
        if(Object.hasOwnProperty(p)){
            ObjectReplacement[p] = Object[p];
        }
    }

    // replacing native Object.create
    ObjectReplacement.create = objectConstructor; // second argument ignored

    ObjectReplacement.defineProperty = function defineProperty(o, name, desc){
        console.log('new Object.defineProperty');
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

        return propDescMap.get(name);
    };

    ObjectReplacement.preventExtensions = function preventExtensions(o){
        var handler = proxyToHandler.get(o);
        if(!handler)
            throw new Error("Unsupported object. Did you create it with 'new Object()'?");

        handler.extensible = false;
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

})(this);

