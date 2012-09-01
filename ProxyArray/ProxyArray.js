"use strict";

(function(global){

    global.ProxyArray = function ProxyArray(...args){
        var arrayStorage = Object.create(Array.prototype);
        // TODO init length and array with arguments

        // The handler shouldn't just be an object, but should inherit from VirtualHandler.prototype
        // so that [[Get]] works as expected
        var arrayHandler = new VirtualHandler();

        // Reimplementing 15.4.5.1 [[DefineOwnProperties]]
        arrayHandler.defineProperty = function(target, name, desc){
            var oldLenDesc = this.getOwnPropertyDescriptor("length"); // handler method
            var oldLen = oldLenDesc.value;
            var newLenDesc, newLen, newWritable;
            var succeeded;
            var deleted;
            var index;

            if(name === "length"){
                if(desc.value === undefined)
                    return Object.defineProperty(arrayStorage, "length", desc); // ES5 8.12.9

                newLenDesc = oldLenDesc;
                newLen = Number(desc.value); // Supposed to call ToUInt32
                // If newLen is not equal to ToNumber( Desc.[[Value]]), throw a RangeError exception.

                newLenDesc.value = newLen;

                if(newLen >= oldLen)
                    return Object.defineProperty(arrayStorage, "length", newLenDesc); // ES5 8.12.9

                // Reject if oldLenDesc.[[Writable]] is false.

                newWritable = !("writable" in newLenDesc) || newLenDesc.writable;
                if(!newWritable)
                    newLenDesc.writable = true;

                succeeded = Object.defineProperty(arrayStorage, "length", newLenDesc); // ES5 8.12.9
                if(!succeeded)
                    return false;

                // Delete properties which name is above newLen (cause the user set the length prop)
                // This can be highly suboptimal (for a very sparse array). Another idea would be to :
                // - Get the properties of the object
                // - Filter out those which aren't numbers
                // - Filter out those which are < newLen
                // - Sort the remaining props, then apply the loop.
                while(newLen < oldLen){
                    oldLen--;
                    deleted = this.delete(oldLen.toString());
                    if(!deleted){ // means [oldLen] cannot be deleted
                        newLenDesc.value = oldLen + 1;
                        if(!newWritable)
                            newLenDesc.writable = false;
                        Object.defineProperty(arrayStorage, "length", newLenDesc); // ES5 8.12.9
                        // reject
                    }
                }

                if(!newWritable){
                    Object.defineProperty(arrayStorage, "length", {writable:false}); // ES5 8.12.9
                }

                return true;
            }
            else{
                if(String(Number(name)) === name){ // Should be "ToString(ToUint32(P)) === P  &&  ToUint32(P) !== (2^32 − 1)"
                    index = Number(name);
                    // Reject if index ≥ oldLen and oldLenDesc.[[Writable]] is false.
                    succeeded = Object.defineProperty(arrayStorage, name, desc); // ES5 8.12.9
                    // Reject if succeeded is false.
                    if(index >= oldLen){
                        oldLenDesc.value = index + 1;
                        Object.defineProperty(arrayStorage, "length", oldLenDesc); // ES5 8.12.9
                    }
                    return true;
                }
                else{
                    return Object.defineProperty(arrayStorage, "length", oldLenDesc); // ES5 8.12.9
                }
            }
        };

        (function constructor(){
            var lengthDesc = {writable:true, configurable:false, enumerable:false};
            var i;
            var argsl = args.length;

            if(argsl === 1){
                var arg0 = args[0];
                if(typeof(arg0) === "number"){
                    /*if (ToUint32(arg0) != arg0){throw new RangeError;} */
                    lengthDesc.value = arg0;
                    Object.defineProperty(arrayStorage, "length", lengthDesc);
                }
                else{
                    lengthDesc.value = 1;
                    Object.defineProperty(arrayStorage, "length", lengthDesc);

                    arrayStorage[0] = arg0; // setting uses true,true,true for prop attributes
                }
            }
            else{
                lengthDesc.value = argsl;
                Object.defineProperty(arrayStorage, "length", lengthDesc);

                for(i = 0; i < argsl; i++)
                    arrayStorage[i] = args[i]; // setting uses true,true,true for prop attributes
            }

            //console.log('End constructor');
        })();

        return new Proxy(arrayStorage, arrayHandler);
    };

})(this);

