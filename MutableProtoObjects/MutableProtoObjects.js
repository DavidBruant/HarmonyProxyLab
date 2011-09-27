"use strict";

(function(global){
    var objectToProto = new WeakMap();
    var ObjectGetPrototypeOf = Object.getPrototypeOf; // copy of the built-in
    
    function isObject(o){
        return (typeof o === 'object' || typeof o === 'function');
    }
    
    // Redefining Object.getPrototypeOf
    Object.getPrototypeOf = function(o){
                                return objectToProto.has(o) ?
                                         objectToProto.get(o) :
                                         ObjectGetPrototypeOf(o);
                            };
    
    // Defining new, non-standard primitive to change the prototype of an object o.
    Object.changePrototype = function(o, newProto){
                                 if(!isObject(o))
                                     throw new TypeError("First argument should be an object. It's a " + typeof o);
                                 if(!(isObject(newProto) || newProto === null))
                                     throw new TypeError("Second argument should be an object or null. It's a " + typeof newProto);
    
                                 if(!objectToProto.has(o))
                                     throw new Error("Sorry buddy, no can't do! Can't change the prototype of the passed object. " +
                                                     "It was certainly not created with MutableProtoObject!");
    
                                 objectToProto.set(o, newProto);
                                 
                                 // return value?
                             };
    

    this.MutableProtoObject = function(initialProto){
                                  var target = Object.create(null);
                                  // Wrap target in a forwarder proxy ([[Prototype]] = initialProto? initialProto: null)
                                  // The forwarder forwards at the own layer, but delegates to the "dynamic" prototype
                                  // (proxy attached to the handler as this.proxy)
                                  
                                  // Add the proxy to the weakmap with the proto associated to it.
                                  
                                  
                              };
                              
})(this);



