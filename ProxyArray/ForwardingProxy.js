"use strict";

function handlerMaker(obj) {
  return {
   getOwnPropertyDescriptor: function(name) {
     //console.log('getOwnPropertyDescriptor', arguments);
     var desc = Object.getOwnPropertyDescriptor(obj, name);
         
     // temp fix to avoid https://bugzilla.mozilla.org/show_bug.cgi?id=582967
     // if the property isn't define, act as if it was with undefined value
     return desc || {value:undefined, writable:true, configurable:true, enumerable:true};
   },
   
   getPropertyDescriptor: function(name) {
        //console.log('getPropertyDescriptor: looking for '+name+'.');
        /*var objectToInspect;
        var result;

        for(objectToInspect = proxy; //will eventually be passed as an argument, right?
            objectToInspect !== null; 
            objectToInspect = Object.getPrototypeOf(objectToInspect))
        {
                console.log()
                result = Object.getOwnPropertyDescriptor(objectToInspect, name);
                if (result !== undefined) { return result; } 
        }*/
        
        var d = this.getOwnPropertyDescriptor(name);
        var pd = Object.getOwnPropertyDescriptor(Array.prototype, name);
        //console.log(d);
        var ret = !(d === undefined || d.value === undefined /*because of the temp fix*/) ?
                        d :
                        pd === undefined ?
                            {value:undefined, writable:true, configurable:true, enumerable:true}:
                            pd;
        
        // temp fix to avoid https://bugzilla.mozilla.org/show_bug.cgi?id=582967
        return ret;
   },
   
   getOwnPropertyNames: function() {
     //console.log('getOwnPropertyNames', arguments);
     return Object.getOwnPropertyNames(obj);
   },
   
   getPropertyNames: function() {
     //console.log('getPropertyNames', arguments);
     return this.getOwnPropertyNames(); // incorrect !
   },
   
   defineProperty: function(name, desc) {
     //console.log('defineProperty', arguments);
     Object.defineProperty(obj, name, desc);
   },
   
   delete: function(name) { 
     //console.log('delete', arguments);
     return delete obj[name]; 
   },
      
   fix:          function() {
     if (Object.isFrozen(obj)) {
       return Object.getOwnPropertyNames(obj).map(function(name) {
         return Object.getOwnPropertyDescriptor(obj, name);
       });
     }
     // As long as obj is not frozen, the proxy won't allow itself to be fixed
     return undefined; // will cause a TypeError to be thrown
   }
  };
}

