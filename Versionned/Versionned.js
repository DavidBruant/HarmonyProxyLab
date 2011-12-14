"use strict";

function makeReadOnly(o){
    // returns a ReadOnly view of the object
    // It's a membrane (things accessed from the object are readonly as well)
    // TODO: implement
    console.warn('makeReadOnly is not yet implemented');
    return o;
}

function Change(){}
Object.defineProperty(Change, 'CREATION', {value: new Object()});
Object.defineProperty(Change, 'DELETION', {value: new Object()});
Object.defineProperty(Change, 'NON_EXTENSIBLE', {value: new Object()});





(function(global){

    var handlerProto = {
        getOwnPropertyDescriptor: function(){
        
        },
        
        get: function(target, name, receiver){
            var ret = makeBranch(this.initState);
            var state = parseInt(name);
            
            if(isNaN(state))
                throw new TypeError();
            
            // TODO: apply this.change(s) up to state to ret
            console.warn('snapshot getter not yet implemented');
            
            return makeReadOnly(ret);
        }
    
    }

    /***
    ** initState: object
    ** changes: [ {name, change} ]. change is either a property descriptor or a symbolic value
    */
    global.makeSnapshots = function(initState, changes){
        var handler = Object.create(handlerProto);
        handler.changes = changes;
        handler.initState = initState;

        var target = new Array(changes.length);
        
        return Proxy.create(target, handler);
    }

})(this);


/***
** changeListener takes a number as argument
** This number is the key to retrieve the object after the change in the
** related snapshots object
*/
function makeAddChangeSnapshotsPair(initState, changeListener){
    var changes = [];

    return {
        addChange: function(change){
            if(!('name' in change && 'change' in change))
                throw new TypeError('Object is not of the correct form: ' + JSON.stringify(change));
        
            changes.push(change);
            
            // notify listeners
            changeListener(changes.length);
        },
        snapshots: makeSnapshots(initState, makeReadOnly(changes))
    }
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
        
        return pd1 && pd2 && Object.keys(pd1).every(function(attr){
            return is(pd1[attr], pd2[attr]);
        });
    }
    
  
    /* TODO: remove
    function Snapshots(initState, history){        
        Array-like object. No setters at all
        
        {get length(){
            return history.length;
         },
         numericIndexes: "snapshots", // requires to create a proxy
         latest: {} // live read-only copy of the latest
        };
        
    }*/
    
    
    
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
                if(!currentPd)
                    this.addChange({name: name, change: Change.CREATION});
            
                this.addChange({name: name, change: newPd});
            }
            
            return true; // is this buggy?
        },
                                  
        delete: function(target, name){
            var currentPd = Object.getOwnPropertyDescriptor(target, name),
                newPd,
                returnValue;
            
            if(currentPd === undefined)
                return true; // don't add a change to the history for deleting a non-existing property
            
            try{
                returnValue = delete target[name]; // forward operation to the target
            }
            catch(e){
                // Delete throwing === non-configurable property
                return false; // No need to record the history
            }
            
            newPd = Object.getOwnPropertyDescriptor(target, name);
            
            if(newPd === undefined)
                this.addChange({name: name, change: Change.DELETION});
            
            return returnValue;
        }
        
        /* traps which alter an object
        function defineProperty(target,name,desc)
        function set(target,name,value,receiver) ?
        
        function delete(target,name) 
        
        function freeze(target)
        function seal(target)
        function preventExtensions(target)
        */
        
    };


    /**
    ** From an object, creates:
    ** 1) Another object which actions are going to be recorded but that will
    ** appear to be exactly the same that the target object with the exception
    ** of object identity.
    ** 2) An object which can show the different states the object went through
    **
    ** changeListener: see makeAddChangeSnapshotsPair
    */
    global.Versionned = function(toRecord, changeListener){
        changeListener = changeListener || function(){};
        var handler = Object.create(handlerProto);
        var recorded = new Proxy(toRecord, handler);
        
        var pair = makeAddChangeSnapshotsPair(toRecord, changeListener),
            snapshots = pair.snapshots;
        handler.addChange = pair.addChange;
        
        return {recorded: recorded,
                snapshots: snapshots};
    };

})(this);
