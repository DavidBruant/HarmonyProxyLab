"use strict";

(function(global){

    // Redefining Object.defineProperty to work around https://bugzilla.mozilla.org/show_bug.cgi?id=601379
    var nativeObjectDefineProperty = Object.defineProperty;
    var descriptorMap = new WeakMap();
    
    Object.defineProperty = function defineProperty(o, name, desc){
        var descs;
        var ret;
        
        if(!descriptorMap.has(o))
            descriptorMap.set(o, Object.create(null));
        descs = descriptorMap.get(o);
        descs[name] = desc;
        
        try{
            // call the native function (which traps if o is a proxy)
            ret = nativeObjectDefineProperty(o, name, desc);
        }
        catch(e){
            // forward the error
            throw e;
        }
        finally{
            // remove the entry
            delete descs[name];
        }
        
        return ret;
    };
    


    /***
    ** Design decision:
    ** * return an object with separate functions to allow
    ** separation of functionalities (especially adding listeners and firing)
    */
    function makeEventProperty(o){
        var listeners = []; // array or null (event removed from object)

        var ret = function(){
            var args = arguments;

            if( listeners ){
                listeners.forEach(function(f){
                    f.apply(o, args); // OPEN_QUESTION: is this the right way to deal with bound functions?
                });
            }
            else{
                throw new Error("The event can't be fired anymore");
                // TODO: create my own error type.
            }
        };

        ret.addListener = function(l){
            if(listeners) // OPEN_QUESTION: Should i let it throw instead?
                listeners.push(l);
        },

        ret.removeListener = function(f){
            if(listeners){ // OPEN_QUESTION: Should i let it throw instead?
                var i = listeners.indexOf(f);

                return i === -1 ?
                    false:
                    delete listeners[i]; // Removes the function, keeps the order of the rest and efficient
            }
        },
        
        ret.revokeEvent = function(){
            listeners = null;
        }
            
        return ret;
    }
    
    

    // Based on http://wiki.ecmascript.org/doku.php?id=harmony:proxy_defaulthandler
    var Handler = function(target) {
        this.target = target;
        this.events = Object.create(null);
        this.eventRevokers = Object.create(null);
    };
     
    Handler.prototype = {

        // == own layer traps ==
        getOwnPropertyDescriptor: function(name) {
            var eventDesc = Object.getOwnPropertyDescriptor(this.events, name);

            if(eventDesc !== undefined){ // event case
                delete eventDesc.writable;
                delete eventDesc.value;
                // keep enumerable and configurable as is
                eventDesc.event = true;
                return eventDesc; 
            }
            else{ // normal cases
                var desc = Object.getOwnPropertyDescriptor(this.target, name);
                if (desc !== undefined) { desc.configurable = true; }
                    return desc;
            }
        },
        
        getOwnPropertyNames: function() {
            return Object.getOwnPropertyNames(this.target); // TODO add events
        },

        defineProperty: function(name, desc) {
            var proxy = this.proxy;
            var event;
            
            // Working around https://bugzilla.mozilla.org/show_bug.cgi?id=601379
            var descArg = desc; // passed as argument to the trap
            if(descriptorMap.has(proxy)){
                desc = descriptorMap.get(proxy)[name]; // passed by the user ( /!\ no completion, no coercion /!\ )
            }
            
            
            if(desc.event){
                // OPEN_QUESTION: Check if the event property already exists before creating a new one?
                event = makeEventProperty(proxy);
                
                delete desc.writable;
                desc.value = event; // reuse configurable & enumerable
                
                Object.defineProperty(this.events, name, desc);
                
                // detach the revoker
                desc.value = event.revokeEvent; // reuse configurable & enumerable
                Object.defineProperty(this.eventRevokers, name, desc);
                delete event.revokeEvent;
                
                return true;
            }
            else{
                return Object.defineProperty(this.target, name, desc);
            }
        },

        delete: function(name) {
            if(name in this.events){
                if(delete this.events[name]){
                    this.eventRevokers[name](); // revoke in case someone kept a reference to the fire function
                    delete this.eventRevokers[name];
                    return true;
                }
                
                return false;
            }
        
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

        get: function(receiver, name) {
             return name in this.events ?
                 this.events[name]:
                 this.target[name];
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

        */
        
        // TODO: figure out a proper behavior for set
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
        proto = proto || null;
    
        var handler = new Handler(Object.create(proto));
        var p = Proxy.create(handler, proto);
        handler.proxy = p;
        
        return p;
    };



})(this);
