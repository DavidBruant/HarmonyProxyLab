# Tests to do

````javascript
var a={yo:{}}, // variable, object, nested object
    b=bla({}); // object as argument
function C(){} // function declaration
a = function(){}; // function expression
a = [{}]; // array declaration + object nested in array
a = new C({}); // object created by "new" and object as argument ; might be a step too far because returned obj may not be new
function f(){ return {} }; // in return statement
(function(){})(); // wrap-then-call
throw new RangeError(); // throw statement
var arrObj = [0, , 2]; // array with hole in it
````