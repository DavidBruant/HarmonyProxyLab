"use strict";

function History(){
    var target = [];
    target.addEntry = Array.prototype.push.bind(target);
    
    var handler = {
        get: function(target, name){
            if(this.hasOwn(target, name))
                return target[i];
                // TODO: figure out how to better filter
        }
    }
    
    return Proxy([], handler);
}



/*****
** Versionned objects
*/

(function(global){
    
    /*** UTILS ***/
    
    /***
    ** Test if 2 values are the same
    */
    function is(x, y) {
        if (x === y) {
            // -0 and +0 are different values  
            return x !== 0 || 1 / x === 1 / y;
        }
        
        // if x !== y, it's still possible that x and y are NaN
        return x !== x && y !== y;
    }
    
    /***
    ** Tests whether two property descriptors described the same property
    */
    function sameDescriptor(pd1, pd2){
        // TODO: complete the descriptors beforehand?
    
        return Object.keys(pd1).every(function(attr){
            return is(pd1[attr], pd2[attr]);
        });
    }
    
    
    
     // TODO: replace this dummy function
    function Snapshots(initState, history){        
        /*
        Array-like object. No setters at all
        
        */
        {get length(){
            return history.length;
         },
         numericIndexes: "snapshots", // requires to create a proxy
         latest: {} // live read-only copy of the latest
        };
        
    }
    
    
    
    /** Traps only for operations that change something to the object state **/
    var handlerProto = {
    
        defineProperty: function(target, name, pd){
            var currentPd = Object.getOwnPropertyDescriptor(target, name),
                newPd;
            
            if(sameDescriptor(pd, currentPd))
                return true; // kthxbi
            
            try{
                Object.defineProperty(target, name, pd); // forward operation to the target
            }
            catch(e){
                // Object.defineProperty throwing === property unchanged
                return false; // No need to record the history
            }
            
            newPd = Object.getOwnPropertyDescriptor(target, name);
            
            if(!sameDescriptor(currentPd, newPd)){
                // TODO: add history entry
            }
            
            return true; // is this buggy?
        },
                                  
        delete: function(target, name){
            var currentPd = Object.getOwnPropertyDescriptor(target, name);
            
            if(!currentPd)
                return true; 
            
            // expediates dummy case
            
            // forward operation to the target
            
            // if there is a change in the object state, add an history entry
            
            // return whatever is relevant
        }
        
        /*
        function defineProperty(target,name,desc)
        function delete(target,name) 
        function freeze(target)
        function seal(target)
        function preventExtensions(target)
        function set(target,name,value,receiver)
        */
        
    };


    /**
    ** From an object, creates:
    ** 1) Another object which actions are going to be recorded but that will
    ** appear to be exactly the same that the target object with the exception
    ** of object identity.
    ** 2) An object which can show the different states the object went through
    */
    global.Versionned = function(toRecord){
        
        var handler = Object.create(handlerProto);
        handler.history = new History();

        // TODO: fake calls to pE/seal/freeze/is{$1,$2,$3} & Object.defineProperty 
        // in cases they do something irreversible
        // TODO: instead of using toRecord as the target, branch it and use the branch
        var recorded = new Proxy(toRecord, handler);
        var snapshots = new Snapshots(recorded, history);

        return {recorded: recorded,
                snapshots: snapshots};
    };

})(this);
