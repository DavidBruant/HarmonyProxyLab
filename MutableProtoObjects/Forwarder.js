"use strict";

(function(global){

    // Copied from http://wiki.ecmascript.org/doku.php?id=harmony:proxy_defaulthandler
    var Handler = function(target) {
        this.target = target;
    };
     
    Handler.prototype = {

        // == own layer traps ==
        getOwnPropertyDescriptor: function(name) {
            var desc = Object.getOwnPropertyDescriptor(this.target, name);
            if (desc !== undefined) { desc.configurable = true; }
                return desc;
        },
        
        getOwnPropertyNames: function() {
            return Object.getOwnPropertyNames(this.target);
        },

        defineProperty: function(name, desc) {
            return Object.defineProperty(this.target, name, desc);
        },

        delete: function(name) { return delete this.target[name]; },

        fix: function() {
            // As long as target is not frozen, the proxy won't allow itself to be fixed
            if (!Object.isFrozen(this.target)) {
                return undefined;
            }
            var props = {};
            Object.getOwnPropertyNames(this.target).forEach(function(name) {
                props[name] = Object.getOwnPropertyDescriptor(this.target, name);
            }.bind(this));
            return props;
        },
        
        hasOwn: function(name) { return ({}).hasOwnProperty.call(this.target, name); },

        keys: function() { return Object.keys(this.target); },
        // == own layer traps ==


        // == inheritance-related traps ==
        getPropertyNames: function() {
            var proxy = this.proxy;
            var proto = Object.getPrototypeOf(proxy); // 'proxy' and not 'target'
            
            var names = this.getOwnPropertyNames();
            return proto === null ?
                names:
                names.concat(Object.getPropertyNames(proto)); // TODO: remove duplicates?
        },
        
        getPropertyDescriptor: function(name) {
            var proxy = this.proxy;
            var proto = Object.getPrototypeOf(proxy); // 'proxy' and not 'target'
            
            var desc = this.getOwnPropertyDescriptor(name);
            return (desc !== undefined || proto === null) ?
                desc:
                Object.getPropertyDescriptor(proto, name);
        },

        /* USE DEFAULT DERIVED TRAPS FOR THESE 
        
        
        has: function(name) {
            var proxy = this.proxy;
            var proto = Object.getPrototypeOf(proxy); // 'proxy' and not 'target'
            
            var has = this.hasOwn(name);
            return !has && proto === null ?
                false:
                name in proto;
        },

        get: function(receiver, name) {
           
             return this.target[name];
        },

        set: function(receiver, name, value) {
            if (canPut(this.target, name)) { // canPut as defined in ES5 8.12.4 [[CanPut]]
             this.target[name] = value;
             return true;
            }
            return false; // causes proxy to throw in strict mode, ignore otherwise
        },
        */
        
        enumerate: function() {
            var proxy = this.proxy;
            var proto = Object.getPrototypeOf(proxy); // 'proxy' and not 'target'
            
            var result = this.keys();
            if(proto !== null)
                for (var name in proto) { result.push(name); };

            return result;
        }
        // == inheritance-related traps ==



    };


    global.Forwarder = function(o){
        var handler = new Handler(o);
        var p = Proxy.create(handler, Object.getPrototypeOf(o));
        handler.proxy = p;
        
        return p;
    };


})(this);
