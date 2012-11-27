"use strict";

/**
 * Weird thing to investigate:
 * Object.getOwnPropertyDescriptor(new Proxy({}, {getOwnPropertyDescriptor: function(){return {event: true}} }))
 */


var setImmediate = this.setImmediate || function setImmediate(f){
    setTimeout(f, 0);
};

(function(global){
    var Object = global.Object;

    var objectToDefinePropertyDescriptorMap = new WeakMap();
    (function(){
        "Redefining Object.defineProperty to work around https://bugzilla.mozilla.org/show_bug.cgi?id=601379";
        var nativeObjectDefineProperty = Object.defineProperty;
        Object.defineProperty = function defineProperty(o, name, desc){
            var descMap;
            var ret;

            if(!objectToDefinePropertyDescriptorMap.has(o))
                objectToDefinePropertyDescriptorMap.set(o, new Map());
            descMap = objectToDefinePropertyDescriptorMap.get(o);
            descMap.set(name, desc);

            try{
                // call the native function (which traps if o is a proxy)
                ret = nativeObjectDefineProperty(o, name, desc);
            }
            catch(e){
                // forward the error if any
                throw e;
            }
            finally{
                // remove the entry
                descMap.delete(name);
            }

            return ret;
        };
    })();

    var objectToGetOwnPropertyDescriptorMap = new WeakMap();
    (function(){
        "Redefining Object.getOwnPropertyDescriptor to work around https://bugzilla.mozilla.org/show_bug.cgi?id=601379";
        var nativeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(o, name){
            var descMap;
            var desc;

            try{
                // call the native function (which traps if o is a proxy)
                desc = nativeObjectGetOwnPropertyDescriptor(o, name);
            }
            catch(e){
                // forward the error if any
                throw e;
            }

            if(!objectToGetOwnPropertyDescriptorMap.has(o))
                objectToGetOwnPropertyDescriptorMap.set(o, new Map());
            descMap = objectToGetOwnPropertyDescriptorMap.get(o);
            desc = descMap.get(name) || desc;

            // TODO remove entry from map

            return desc;
        };


    })();


    (function(){ // hack to prevent trap invariant from bitching if value has changed
        var nativeObjectDefineProperty = Object.defineProperty;

        Object.defineProperty = function defineProperty(o, name, desc){
            if('event' in desc)
                desc.writable = true; // hack to prevent trap invariant from bitching if value has changed

            return nativeObjectDefineProperty(o, name, desc);
        };
    })();


    /**
     * Listeners are related to a {target, name} pair
     * the expression target.name return an EventProperty contextualized to target, but with all event listeners (if
     * target!==receiver)
     */
    function EventProperty(eventTarget){
        var listeners = []; // array or null (when event removed from object)

        return {
            fire: function fire(){
                var args = arguments;
                var self = this;

                if(listeners){
                    listeners.forEach(function(f){
                        setImmediate(function(){
                            f.apply(eventTarget, args); // OPEN QUESTION: is this the right way to deal with bound functions?
                        });
                    });
                }
                else{
                    throw new Error("The event property has been deleted. The event can't be fired anymore.");
                }
            },
            addListener : function addListener(l){
                if(listeners){ // OPEN QUESTION: Should I let it throw instead?

                    if(listeners.indexOf(l) === -1)
                        listeners.push(l);
                    else
                        console.warn('Attempt to register the same listener twice. This attempt failed.');
                }
            },
            removeListener : function removeListener(f){
                if(listeners){ // OPEN QUESTION: Should I let it throw instead?
                    var i = listeners.indexOf(f);

                    return i === -1 ?
                        false:
                        delete listeners[i]; // Removes the function, keeps the order of the rest and efficient
                }
            },
            revokeEvent : function revokeEvent(){
                listeners = null;
            }
        };
    }


    var targetToProxy = new WeakMap();
    var targetEventPropMaps = new WeakMap();

    // Per object, we need a map of event properties

    var handler = {
        getOwnPropertyDescriptor: function(target, name) {
            var eventDesc = targetEventPropMaps.get(target).get(name);

            if(eventDesc !== undefined){ // event case
                delete eventDesc.writable;
                delete eventDesc.value;
                // keep enumerable and configurable as is
                eventDesc.event = true;

                // Working around https://bugzilla.mozilla.org/show_bug.cgi?id=601379
                var descMap;
                var proxy = targetToProxy.get(target);
                if(!objectToGetOwnPropertyDescriptorMap.has(proxy))
                    objectToGetOwnPropertyDescriptorMap.set(proxy, new Map());
                descMap = objectToGetOwnPropertyDescriptorMap.get(proxy);
                descMap.set(name, eventDesc);
                // End of workaround
                return eventDesc;
            }
            else{ // normal cases
                return Object.getOwnPropertyDescriptor(target, name);
            }
        },

        defineProperty: function(target, name, desc) {
            var event;
            var ret;

            // Working around https://bugzilla.mozilla.org/show_bug.cgi?id=601379
            var proxy = targetToProxy.get(target);
            if(objectToDefinePropertyDescriptorMap.has(proxy)){
                desc = objectToDefinePropertyDescriptorMap.get(proxy).get(name); // actual desc passed by the user
            }
            // End of workaround

            if(desc.event){
                var targetDesc = Object.getOwnPropertyDescriptor(target, name);
                if(targetDesc && !targetDesc.configurable)
                    throw new Error("Can't reconfigure a non-configurable event property");

                var targetEventPropMap = targetEventPropMaps.get(target);
                if(!targetEventPropMap){
                    targetEventPropMap = new Map();
                    targetEventPropMaps.set(target, targetEventPropMap);
                }

                event = new EventProperty(targetToProxy.get(target));
                targetEventPropMap.set(name, event);

                // detach the revoker
                desc.value = event.revokeEvent; // reuse configurable & enumerable
                delete event.revokeEvent;
                // for event create a placeholder on the target to work fine with has/hasOwn/getOwnPropertyNames, etc.
            }

            return Object.defineProperty(target, name, desc);
        },

        deleteProperty: function(target, name) {
            var targetEventPropMap = targetEventPropMaps.get(target);
            var revokeEvent;
            var ret;

            if(targetEventPropMap && targetEventPropMap.has(name)){
                revokeEvent = target[name];
                ret = delete target[name]; // naturally throws if non-configurable
                revokeEvent();
            }

            return ret !== undefined ? ret : delete target[name];
        },


        get: function(target, name, receiver) {
            console.log("get trap", name);

            var targetEventMap = targetEventPropMaps.get(target);

            return targetEventMap && targetEventMap.has(name) ?
                targetEventMap.get(name) :
                target[name];

        },

        get events(){
            throw new Error("A previous implementation used this.events, but it's no longer the case");
            // TODO report bug FFx no line error when throwing a string
        }
    };

    global.EventedObject = function(target){
        target = Object(target);

        var proxy = new Proxy(target, handler);
        targetToProxy.set(target, proxy);
        return proxy;
    };


})(this);
