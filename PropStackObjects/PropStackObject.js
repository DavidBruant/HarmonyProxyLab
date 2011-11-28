
var PropStackObject = Proxy.createFunction({}, function(){}, function(){
        var obj = {}; // storage
        
        var handler = {
           getOwnPropertyDescriptor: function(name) {/* to be decided */},
           
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
                             if(!Array.isArray(obj[name])){
                                obj[name] = [];
                             }
                             
                             Object.defineProperty(obj[name], obj[name].length, desc);
                           },
           
           set: function(rec, name, val){
                    if(!Array.isArray(obj[name]))
                        this.defineProperty(name, {value:val, enumerable:true, configurable:true, writable:true});
                    else
                        obj[name][ obj[name].length - 1 ] = val;
                },
           
           get: function(rec, name){
                    return !Array.isArray(obj[name]) ?
                                undefined :
                                obj[name][ obj[name].length - 1 ]; // latest stacked
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
