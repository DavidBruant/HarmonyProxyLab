
var IndexedPropStackObject = Proxy.createFunction({}, function(){}, function(){
        var obj = {}; // storage
        
        var handler = {
           getOwnPropertyDescriptor: function(name) {
             var ret = undefined;
             if(Array.isArray(obj[name])){
                ret = [];
                obj[name].forEach(function(e,i){
                                     ret.push( {value:e, index:i} );
                                 });
             }
             
             console.log(ret, '<== Return value of the getOwnPropertyDescriptor trap');
             return ret;
           },
           
           getOwnPropertyNames: function() {
             console.log('getOwnPropertyNames trap');
             var names = Object.getOwnPropertyNames(obj);
             names.forEach(function(n, i, a){
                                //console.log(n, obj[n]);
                                a[i] = obj[n].map(function(e){ return n; });
                           });
             //console.log(names); // Array of arrays
             var ret = names.reduce(function(p, c){return p.concat(c);}, []);
             console.log(ret, '<== Return value of the getOwnPropertyNames trap');
             return ret;
           },
           
           defineProperty: function(name, desc) {
                             var index;
                             //console.log(desc);
                             if(!Array.isArray(obj[name]))
                                obj[name] = [];
                             
                             if(typeof(desc.index) === 'number') // Yes, an 'index' property in the property descriptor.
                                index = desc.index;
                             index = index || obj[name].length;
                             
                             obj[name][index] = desc.value;
                           },
           
           set: function(rec, name, val){
                    if(!Array.isArray(obj[name]))
                        this.defineProperty(name, {value:val});
                    else
                        obj[name][ obj[name].length - 1 ] = val;
                },
           
           get: function(rec, name){
                    return Array.isArray(obj[name]) ?
                                obj[name][ obj[name].length - 1 ]: // latest stacked
                                undefined ;
                                
                },
                
           delete: function(name) { 
                        var del = true; // or whatever the default is when there is nothing to delete
                        if(Array.isArray(obj[name])){
                            obj[name].length = obj[name].length - 1

                            if(obj[name].length == 0)
                                del = del && delete obj[name];
                        }
                        return del;
                   },
           
           fix: function() {/* to be decided */}
          };
       
        return Proxy.create(handler);
        
        }
    );
