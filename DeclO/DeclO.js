function DeclarativeObject(){
  var propNames;
  var getTrap, constructorTrap;
  var firstHandler, middleHandler;
  
  getTrap = function(rec, name){                        
              console.log('getTrap:', name);
              propNames.push(name); // absorbing the name
              
              return Proxy.createFunction(middleHandler , function(){throw Error("Don't call.");} , constructorTrap);
            };

  middleHandler = {get:getTrap}; // shared among all temporary proxies
  
  constructorTrap = function(/* arguments*/){
                      // return something based on the built propNames array
                      console.log('constructorTrap');
                      
                      return propNames.slice();
                    };

  firstHandler = {get:function(rec, name){
                        propNames = [];
                        return getTrap.apply(this, arguments); // Preparing for when the get trap arguments will change to include the proxy
                      }
                 };
                
  return Proxy.create(firstHandler);
}
