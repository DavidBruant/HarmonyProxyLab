"use strict";

(function(global){
    // create a forwarder handler to some object new object

    // redefine Object.getOwnPropertyDescriptor.
    // If the descriptor defines an event ("event":true), create an event
    // Object.create(null); + addListener + removeListener + fire

    /***
    ** Design decision:
    ** * return an object with separate functions to allow
    ** separation of functionalities (especially adding listeners and firing)
    */
    function makeEventProperty(o, canFire){
        var listeners = [];
        var ret = Object.create(null);

        ret.addListener = function(l){
            listeners.push(l);
        };

        ret.removeListener = function(f){
            var i = listeners.indexOf(f);

            return i === -1 ?
                false:
                delete listeners[i]; // Removes the function, keeps the order of the rest and efficient
        };

        ret.fire = function(){
            var args = arguments;

            if( canFire() ){
                listeners.forEach(function(f){
                    f.apply(o, args);
                });
            }
            else{
                throw new Error("The event can't be fired anymore");
                // TODO: create my own error type.
            }
        };

        return ret;
    }


    // Based on http://wiki.ecmascript.org/doku.php?id=harmony:proxy_defaulthandler
    var Handler = function(target) {
        this.target = target;
        this.events = {};
    };
     
    Handler.prototype = {

        // == own layer traps ==
        getOwnPropertyDescriptor: function(name) {
            // TODO handle event case
        
            var desc = Object.getOwnPropertyDescriptor(this.target, name);
            if (desc !== undefined) { desc.configurable = true; }
                return desc;
        },
        
        getOwnPropertyNames: function() {
            return Object.getOwnPropertyNames(this.target);
        },

        defineProperty: function(name, desc) {
            if(desc.event){
              // TODO Create an event property with the factory
              // The canFire function must be shared with the delete trap.
              
            }
            else{
              return Object.defineProperty(this.target, name, desc);
            }
        },

        delete: function(name) {
            // TODO handle event case (play with canFire)
        
            return delete this.target[name];
            
        },

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
        
        // TODO: figure out a proper behavior for get and set

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
        */
        
        set: function(receiver, name, val) {
            var desc = this.getOwnPropertyDescriptor(name);
            var setter;
            if (desc) {
              if ('writable' in desc) {
                if (desc.writable) {
                  this.defineProperty(name, {value: val});
                  return true;
                } else {
                  return false;
                }
              } else { // accessor
                setter = desc.set;
                if (setter) {
                  setter.call(receiver, val);
                  return true;
                } else {
                  return false;
                }
              }
            }
            desc = this.getPropertyDescriptor(name);
            if (desc) {
              if ('writable' in desc) {
                if (desc.writable) {
                  // fall through
                } else {
                  return false;
                }
              } else { // accessor
                var setter = desc.set;
                if (setter) {
                  setter.call(receiver, val);
                  return true;
                } else {
                  return false;
                }
              }
            }
            this.defineProperty(name, {
              value: val, 
              writable: true, 
              enumerable: true, 
              configurable: true});
            return true;
          },
        
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


    global.EventedObject = function(proto){
        var handler = new Handler(Object.create(proto));
        var p = Proxy.create(handler, proto);
        handler.proxy = p;
        
        return p;
    };


})(this);
