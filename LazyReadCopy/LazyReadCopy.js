(function(global){
		    
    var handlerProto = {getOwnPropertyDescriptor: function(name){
                                                      // Look in the changed properties first
                                                      var newpd = Object.getOwnPropertyDescriptor(this.changedProperties, name);
                                                      if(newpd !== undefined)
                                                          return newpd;

                                                      // Make sure the property has not been (virtually) deleted
                                                      if(this.deletedProperties.indexOf(name) !== -1)
                                                          return undefined;

                                                      // Read on the target otherwise
                                                      return Object.getOwnPropertyDescriptor(this.target, name);
                                                  },
                                                  
                        getOwnPropertyNames:      function(){
                                                      // Union of Object.getOwnPropertyNames(this.target)
                                                      // and Object.getOwnPropertyNames(this.changedProperties)
                                                      // minus this.deletedProperties
                                                  },
                                                  
                        defineProperty:           function(name, pd){
                                                      var currentPd = Object.getOwnPropertyDescriptor(this.target, name);

                                                      // if Object.getOwnPropertyDescriptor(this.target, name) would reject, then reject
                                                      // (test simplified to:)
                                                      if(currentPd === undefined || currentPd.configurable){
                                                          // if it wouldn't, do the defineProperty on this.changedProperties
                                                          Object.defineProperty(this.changedProperties, name, pd);
                                                          
                                                          // if it was in this.deletedProperties, remove it
                                                          if(this.deletedProperties.indexOf(name) !== -1)
                                                              this.deletedProperties.splice(this.deletedProperties.indexOf(name), 1);
                                                      }
                                                      else
                                                         throw new TypeError("Hey, you can't reconfigure the property "+ name +" with the property descriptor you passed: "+JSON.stringify(pd));
                                                          
                                                  },
                                                  
                        delete:                   function(name){
                                                      var pd = this.getOwnPropertyDescriptor(name); // there is a property to delete
                                                      var ret = pd && pd.configurable; // ... or whatever condition makes the delete operation returning true
                                                      
                                                      this.deletedProperties.push(name);
                                                      
                                                      delete this.changedProperties[name];
                                                      // never delete from this.target: other folks may need the property
                                                      return ret;
                                                  },
                        
                        fix:                      function(){
                                                      // TODO
                                                  },
                        
                        // Based on http://wiki.ecmascript.org/doku.php?id=strawman:proxy_derived_traps
                        getPropertyNames:         function(){
                                                      var proxy = this.proxy; // until it becomes an argument
                                                      var props = Object.getOwnPropertyNames(proxy); // calls getOwnPropertyNames trap
                                                      var proto = Object.getPrototypeOf(proxy);
                                                      while (proto !== null) {
                                                        props = props.concat(Object.getOwnPropertyNames(proto));
                                                        proto = Object.getPrototypeOf(proto);
                                                      }
                                                      // remove duplicate property names from props (not shown)
                                                      return props;
                                                  },
                                                  
                        getPropertyDescriptor:    function(name){
                                                      var proxy = this.proxy; // until it becomes an argument
                                                      var pd = Object.getOwnPropertyDescriptor(proxy, name); // calls getOwnPropertyDescriptor trap
                                                      var proto = Object.getPrototypeOf(proxy);
                                                      while (pd === undefined && proto !== null) {
                                                        pd = Object.getOwnPropertyDescriptor(proto, name);
                                                        proto = Object.getPrototypeOf(proto);
                                                      }
                                                      return pd;
                                                  }
                        };
    
    
    
    global.LazyReadCopy = function(target){
        var handler = Object.create(handlerProto);
        handler.deletedProperties = [];
        handler.changedProperties = Object.create(null);
        handler.target = target;

        // Trick to give proxy access to the handler while waiting for validation & implementation of:
        // http://wiki.ecmascript.org/doku.php?id=strawman:handler_access_to_proxy
        handler.proxy = Proxy.create(handler);
        return handler.proxy;
    };

})(this);
