"use strict";

/*****
** Replayable
*/

(function(global){
    
    /*** UTILS ***/
    
    // Test is 2 values are the same
    function is(x, y) {
        if (x === y) {
            // -0 and +0 are different values  
            return x !== 0 || 1 / x === 1 / y;
        }
        
        // if x !== y, it's still possible that x and y are NaN
        return x !== x && y !== y;
    }
    
    // Tests whether two property descriptors described the same property
    function sameDescriptor(pd1, pd2){
        return Object.keys(pd1).every(function(attr){
            return is(pd1[attr], pd2[attr]);
        });
    }
    
     // TODO: replace this dummy function
    function RemoteControl(replayable, history){
        /*
        Maybe the replayable can be replaced dynamically?
        */
        
        
        {move:function(delta){},
         go:function(historyIndex){},
         get length(){
            return history.length;
         },
         numericIndexes: "snapshots", // requires to create a proxy
         get rewind(){
            this.move(-1);
            return this;
         },
         get forward(){
            this.move(+1);
            return this;
         }
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
    ** Open question: create a replayable of an
    */
    global.Replayable = function(o){
        
        var handler = Object.create(handlerProto);
        handler.history = [];

        // TODO: fake calls to pE/seal/freeze/is{$1,$2,$3} & Object.defineProperty 
        // in cases they do something irreversible
        var replayable = new Proxy(o, handler);
        var remoteControl = new RemoteControl(o, history);

        return {replayable: replayable,
                remoteControl: remoteControl};
    };

})(this);
