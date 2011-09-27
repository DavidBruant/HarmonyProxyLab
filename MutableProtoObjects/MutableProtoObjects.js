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
    
                                 // TODO Check whether o is in newProto's [[Prototype]] chain.
                                 // Throw if it's the case to avoid prototype cycles
    
                                 objectToProto.set(o, newProto);
                                 
                                 // return value?
                             };
    

    global.MutableProtoObject = function(initialProto){
                                  var target = Object.create(null);
                                  var fTarget = new Forwarder(target);
                                  
                                  objectToProto.set(fTarget, initialProto ? initialProto : null);
                                  
                                  return fTarget;
                              };
                              
})(this);



