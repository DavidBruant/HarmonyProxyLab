"use strict";

module('API');

test("Create an EventedObject in different ways", function(){
    strictEqual(typeof EventedObject(), 'object');
    strictEqual(typeof new EventedObject(), 'object');
    strictEqual(typeof EventedObject({}), 'object');
    strictEqual(typeof new EventedObject({}), 'object');
    /*strictEqual(typeof EventedObject([]), 'object');
    strictEqual(typeof new EventedObject([]), 'object');
    strictEqual(typeof EventedObject(function(){}), 'object');
    strictEqual(typeof new EventedObject(function(){}), 'object');*/
});


module('Basic event API');

test('Create an event property, retrieve its descriptor', function(){
    var o = new EventedObject();

    Object.defineProperty(o, 'e', {event: true, configurable: false});

    strictEqual(Object.getOwnPropertyDescriptor(o, 'e').event, true);
});

/*
var o = new EventedObject();

// Add properties like a normal object
o.a = 1;
o.b = "yo";

// Add an event
Object.defineProperty(o, 'e', {configurable: true, enumerable: false, event:true});

// Add listeners
function f2(msg){
    console.log("f2", msg);
    console.log("f2", JSON.stringify(this)); // |this| is bound to o
}
function f1(msg){
    console.log("f1", msg);
}

o.e.addListener(f1);
o.e.addListener(f2);


// Play with the API
o.e("This is a message"); // f1, f2 are called
o.e.removeListener(f2);
o.e("This is another message"); // Only f1 is called

var fire = o.e;
fire("A message with the method isolated");

// Remove the event from the object.
delete o.e;

try{
    fire("Shouldn't work. Actually, it should throw.");
}
catch(e){
    console.log("Error caught", e);
}


// inheritance

var o = new EventedObject();
o.o = 'o';

Object.defineProperty(o, 'e', {event:true});
o.e.addListener(function(){
    console.log("Event fired from the object:", JSON.stringify(this));
});

var o1 = Object.create(o);
o1.a = 1;

var o2 = Object.create(o);
o2.b = 2;

o1.e();
o2.e();
*/