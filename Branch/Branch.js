"use strict";

/*****
** Branch(ancestor)
** Create an object that looks identical to the ancestor, but then live its own life
** (write operations are not forwarded to the ancestor)
** 
*/

(function(global){
		    
    var handlerProto = {

        /** WRITE OPERATIONS **/                
        defineProperty: function(target, name, pd){
            var currentPd = Object.getOwnPropertyDescriptor(target, name);

            // if Object.getOwnPropertyDescriptor(target, name) would reject, then reject
            // (test simplified to:)
            if(currentPd === undefined || currentPd.configurable){
                // if it wouldn't, do the defineProperty on this.changedProperties
                Object.defineProperty(target, name, pd);
              
                // if it was in this.deletedProperties, remove it
                if(this.deletedProperties[name])
                    delete this.deletedProperties[name];
            }
            else
                throw new TypeError("Hey, you can't reconfigure the property " + name +
                                    " with the property descriptor you passed: " + JSON.stringify(pd));
              
        },
                                  
        delete: function(target, name){
            var targetPd = this.getOwnPropertyDescriptor(target, name);
            var ancestorPd = Object.getOwnPropertyDescriptor(this.ancestor, name);

            var ret = (targetPd && targetPd.configurable) || (ancestorPd && ancestorPd.configurable);

            if(ret && ancestorPd)
                this.deletedProperties[name] = true;

            return ret;
        },
        
        
        /** READ OPERATIONS **/
        getOwnPropertyDescriptor: function(target, name){
            // Look in the changed properties first
            // console.log("target", typeof target, target);
            var newpd = Object.getOwnPropertyDescriptor(target, name);
            if(newpd !== undefined)
                return newpd;

            // Make sure the property has not been (virtually) deleted
            if(this.deletedProperties[name])
                return undefined;

            // Read on the ancestor otherwise
            return Object.getOwnPropertyDescriptor(this.ancestor, name);
        },

        get: function(target, name, receiver){
            if(name in target)
                return target[name];
            else{
                if(this.deletedProperties[name])
                    return undefined;
                else{
                    return this.ancestor[name];
                }
            }
        },

        getOwnPropertyNames: function(){
            // Union of Object.getOwnPropertyNames(this.target)
            // and Object.getOwnPropertyNames(this.changedProperties)
            // minus this.deletedProperties
        }
        
        /*// Based on http://wiki.ecmascript.org/doku.php?id=strawman:proxy_derived_traps
        getPropertyNames: function(){
            var proxy = this.proxy; // until it becomes an argument
            var props = Object.getOwnPropertyNames(proxy); // calls getOwnPropertyNames trap
            var proto = Object.getPrototypeOf(proxy);
            while (proto !== null) {
                props = props.concat(Object.getOwnPropertyNames(proto));
                proto = Object.getPrototypeOf(proto);
            }
            // remove duplicate property names from props (not implemented)
            return props;
        },
                                  
        getPropertyDescriptor: function(name){
            var proxy = this.proxy; // until it becomes an argument
            var pd = Object.getOwnPropertyDescriptor(proxy, name); // calls getOwnPropertyDescriptor trap
            var proto = Object.getPrototypeOf(proxy);
            while (pd === undefined && proto !== null) {
                pd = Object.getOwnPropertyDescriptor(proto, name);
                proto = Object.getPrototypeOf(proto);
            }
            return pd;
        }*/
    };



    global.Branch = function(ancestor){
        var target;
        var handler = Object.create(handlerProto);
        handler.deletedProperties = Object.create(null);
        handler.ancestor = ancestor;

        if(typeof ancestor === 'function'){
            target = function(){}; // TODO: function length?
        }
        else{
            if(Array.isArray(ancestor)){
                target = Array(ancestor.length);
            }
            else{
                target = Object.create( Object.getPrototypeOf(ancestor) );
                // TODO: there are probably other cases
            }
        }
        
        // TODO: maybe pass constant properties to the target?

        return new Proxy(target, handler);
    };

})(this);
