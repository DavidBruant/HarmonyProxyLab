"use strict";

/************
** Redefining Object.preventExtension and Object.isExtensible to support non-extensible proxies
*/

(function(global){
		    
    var builtinProxyCreate = Proxy.create,
        builtinObjectPreventExtensions = Object.preventExtensions,
        builtinObjectIsExtensible = Object.isExtensible;
    var handlersPerProxy = new WeakMap();
    
    Proxy.create = function(handler, proto){
                       var proxy = builtinProxyCreate(handler, proto);
                       handlersPerProxy.set(proxy, handler);
                       Object.defineProperty(handler, 'extensible', {value:true, writable:true}); // protecting myself from future accidental reconfiguration
                       // Trick to give proxy access to the handler while waiting for validation & implementation of:
                       // http://wiki.ecmascript.org/doku.php?id=strawman:handler_access_to_proxy
                       handler.proxy = Proxy.create(handler);
                       
                       return proxy;
                   };

    Object.preventExtensions = function(o){
                                  var handler;
                                  var propNames;
                                  if(handlersPerProxy.has(o)){ // that's a proxy
                                      handler = handlersPerProxy.get(o);
                                      // protecting myself from future accidental write
                                      Object.defineProperty(handler, 'extensible', {value:false, writable:false}); 
                                      propNames = handler.fix(); // The fix trap returns an array of strings

                                      // Adding an internal ownPropNames property to the handler to store names
                                      // It's an object in order to use the (hopefully) fast .hasOwnProperty lookup
                                      handler.ownPropNames = {};
                                      propNames.forEach(function(name){handler.ownPropNames[name] = true;});
                                      Object.preventExtensions(handler.ownPropNames); // self-protection
                                  }
                                  else{ // not a proxy. Just call the regular stuff
                                      builtinObjectPreventExtensions(o);
                                  }
                              };

    Object.isExtensible = function(o){
                              if(handlersPerProxy.has(o)){ // that's a proxy
                                  return handlersPerProxy.get(o).extensible;
                              }
                              else{ // not a proxy. Just call the regular stuff
                                  return builtinObjectIsExtensible(o);
                              }
                          };
                          
    // TODO: I'm lazy, but the equivalent should be done for Object.{seal | freeze} and Object.{isSealed | isFrozen}

})(this);





/***********
** Turn a handler into another handler respecting ES5.1 non-extensible objects invariants
** Highly inspired from http://code.google.com/p/es-lab/source/browse/trunk/src/proxies/FixedHandler.js
*/

function NonExtensibleHandler(h){
    // Take a handler and make it able to be non-configurable while still 
    // respecting ES5.1 non-extensible object invariants
    this.targetHandler = h;
}

NonExtensibleHandler.prototype = {
// === fundamental traps ===
 
  // if the proxy is non-extensible, must return undefined
  getOwnPropertyDescriptor: function(name) {
    var desc = this.targetHandler.getOwnPropertyDescriptor(name);
    
    if(!this.extensible){
        if(this.ownPropNames.hasOwnProperty(name)){
            return desc;
        }
        else{
            if(desc !== undefined)
                throw new TypeError("cannot report non-present property "+name+" as existent");
            return undefined;
        }
    }
    else 
        return desc;
  },
 
  // if the proxy is non-extensible and the property isn't defined on the prototype, must return undefined
  getPropertyDescriptor: function(name) {
    var desc = this.targetHandler.getPropertyDescriptor(name);
    var proxy = this.proxy; // Waiting for proxy to be a trap argument
    
    if(!this.extensible){
        if(this.ownPropNames.hasOwnProperty(name)){
            return desc;
        }
        else{
            if(desc !== undefined && !(name in Object.getPrototypeOf(proxy)))
                throw new TypeError("cannot report non-present property "+name+" as existent");
            return undefined;
        }
    }
    else 
        return desc;
  },
  
  // One is not allowed to extend a non-extensible object
  defineProperty: function(name, desc) {
    var success = this.targetHandler.defineProperty(name, desc);

    if(!this.extensible && !this.ownPropNames.hasOwnProperty(name)){
        // Reject. Not 100% sure it always mean throwing an error. Doing it anyway for now.
        // Maybe I should just return false?
        throw new TypeError("cannot call Object.defineProperty with property " + name
                            +" since the object is not extensible and the property isn't already present.");
    }

    return success;
  },
 
  // unchanged
  fix: function() {
    return this.targetHandler.fix(); // should return an array of strings
  },
 
  // unchanged
  'delete': function(name) {
    return this.targetHandler['delete'](name);
  },
 
  // Make sure it doesn't lie
  getOwnPropertyNames: function() {
    var ret = this.targetHandler.getOwnPropertyNames();
    
    if(!this.extensible){
        // What should I do?
        // * Throw ret away?
        // * Do check to make sure all its elements are in this.ownPropNames?
        
        // Throwing ret away for now
        return Object.getOwnPropertyNames(this.ownPropNames);
    }
    else{
        return ret;
    }
  },
 
  // Make sure it doesn't lie
  getPropertyNames: function() {
    var ret = this.targetHandler.getPropertyNames();
    var proxy = this.proxy; // until it becomes a trap argument    
    var protoProps = []

    if(!this.extensible){
        // What should I do?
        // * Throw ret away?
        // * Do check to make sure all its elements are in this.ownPropNames?
        
        // Throwing ret away for now
        var proto = Object.getPrototypeOf(proxy);
        while (proto !== null) {
            protoProps = protoProps.concat(Object.getOwnPropertyNames(proto));
            proto = Object.getPrototypeOf(proto);
        }
        
        return Object.getOwnPropertyNames(this.ownPropNames).concat(protoProps);  // remove duplicate property names (not shown)
    }
    else{
        return ret;
    }
  },
 
  // === derived traps ===
 
  // if name denotes a property that is not already present in non-extensible proxy, must return false, throw otherwise
  hasOwn: function(name) {
    // simulate missing derived trap fall-back behavior
    var res = this.targetHandler.hasOwn ?
                this.targetHandler.hasOwn(name) :
                TrapDefaults.hasOwn.call(this.targetHandler, name);
    res = !!res; // coerce to Boolean
    if (!this.extensible && 
        !this.ownPropNames.hasOwnProperty(name) && 
        res === true) {
      throw new TypeError("Cannot report non-existing property "+
                          name + " as existent in a non-extensible proxy");
    }
    return res;
  },
 
  // if name denotes a property that is not already present in non-extensible proxy or in the prototype, must return false, throw otherwise
  has: function(name) {
    // simulate missing derived trap fall-back behavior
    var res = this.targetHandler.has ?
                this.targetHandler.has(name) :
                TrapDefaults.has.call(this.targetHandler, name);
    var proxy = this.proxy; // waiting for proxy to become an argument
    res = !!res; // coerce to Boolean
    if (!this.extensible && 
        !this.ownPropNames.hasOwnProperty(name) && 
        !(name in Object.getPrototypeOf(proxy)) && 
        res === true) {
      throw new TypeError("Cannot report non-existing property "+
                          name + " as existent in a non-extensible proxy");
    }
    return res;
  },
 
  // 
  get: function(rcvr, name) {
    // simulate missing derived trap fall-back behavior
    var res = this.targetHandler.get ?
                this.targetHandler.get(rcvr, name) :
                TrapDefaults.get.call(this.targetHandler, rcvr, name);      
    
    if(!this.extensible && 
       !this.ownPropNames.hasOwnProperty(name) && 
       res !== undefined){
           throw new TypeError('Property '+name+' is not defined and the proxy is not extensible. Its value must be undefined. It is:'+res);
    }
              
    return res;
  },
 
  // if name denotes a fixed, non-configurable, non-writable data property,
  // check that 'set' reports the assignment as unsuccessful
  set: function(rcvr, name, val) {
    // simulate missing derived trap fall-back behavior
    var res = this.targetHandler.set ?
                this.targetHandler.set(rcvr, name, val) :
                TrapDefaults.set.call(this.targetHandler, rcvr, name, val);
    res = !!res; // coerce to Boolean        
    if(!this.extensible && 
       !this.ownPropNames.hasOwnProperty(name) && 
       res === true){
         throw new TypeError('cannot report setting correctly occured on a non-extensible object for property '+name+
                             "which is not already in the proxy");
    }
   
    return res;
  },
 
  // Make sure it doesn't lie
  enumerate: function() {
    // simulate missing derived trap fall-back behavior
    var ret = this.targetHandler.enumerate ?
             this.targetHandler.enumerate() :
             TrapDefaults.enumerate.call(this.targetHandler);
             
    var protoProps = [];

    if(!this.extensible){
        // What should I do?
        // * Throw ret away?
        // * Do check to make sure all its elements are in this.ownPropNames?
        
        // Throwing ret away for now
        var proto = Object.getPrototypeOf(proxy);
        while (proto !== null) {
            protoProps = protoProps.concat(Object.getOwnPropertyNames(proto));
            proto = Object.getPrototypeOf(proto);
        }
        
        return Object.getOwnPropertyNames(this.ownPropNames).concat(protoProps);  // remove duplicate property names (not shown)
        // TODO: What about non-enumerable properties
    }
    else{
        return ret;
    }    
  },
 
  // Make sure it doesn't lie
  keys: function() {
    // simulate missing derived trap fall-back behavior
    var ret = this.targetHandler.keys ?
             this.targetHandler.keys() :
             TrapDefaults.keys.call(this.targetHandler);
    
    if(!this.extensible){
        // What should I do?
        // * Throw ret away?
        // * Do check to make sure all its elements are in this.ownPropNames?
        
        // Throwing ret away for now
        return Object.keys(this.ownPropNames);
        // TODO: What about non-enumerable properties
    }
    else{
        return ret;
    }         
    
  }
};

// Trap defaults, from http://wiki.ecmascript.org/doku.php?id=harmony:proxies
// call with |this| bound to the required handler
var TrapDefaults = {
  has: function(name) { return !!this.getPropertyDescriptor(name); },
  hasOwn: function(name) { return !!this.getOwnPropertyDescriptor(name); },
  get: function(receiver, name) {
    var desc = this.getPropertyDescriptor(name);
    if (desc === undefined) { return undefined; }
    if ('value' in desc) {
      return desc.value;
    } else {
      if (desc.get === undefined) { return undefined; }
      return desc.get.call(receiver);
    }
  },
  set: function(receiver, name, val) {
    var desc = this.getOwnPropertyDescriptor(name);
    if (desc) {
      if ('writable' in desc) {
        if (desc.writable) {
          desc.value = val;
          this.defineProperty(name, desc);
          return true;
        } else {
          return false;
        }
      } else { // accessor
        if (desc.set) {
          desc.set.call(receiver, val);
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
        if (desc.set) {
          desc.set.call(receiver, val);
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
    return this.getPropertyNames().filter(
      function (name) { return this.getPropertyDescriptor(name).enumerable }.bind(this));
  },
  keys: function() {
    return this.getOwnPropertyNames().filter(
      function (name) { return this.getOwnPropertyDescriptor(name).enumerable }.bind(this));
  }
 
}; // end TrapDefaults

NonExtensibleHandler.installAsDefault2 = function() {
  if (typeof Proxy === "object") {
    var primCreate = Proxy.create,
        primCreateFunction = Proxy.createFunction;

    Proxy.create = function(handler, proto) {
      return primCreate(new NonExtensibleHandler(handler), proto);
    };
    Proxy.createFunction = function(handler, call, construct) {
      return primCreateFunction(new NonExtensibleHandler(handler), call, construct);
    };
  }
};



