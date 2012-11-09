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

test('Create an event property, check event API', function(){
    var o = new EventedObject();

    Object.defineProperty(o, 'e', {event: true, configurable: false});

    var eventProperty = o.e;

    strictEqual(typeof eventProperty.fire, 'function');
    strictEqual(typeof eventProperty.addListener, 'function');
    strictEqual(typeof eventProperty.removeListener, 'function');
    ok( !('revoke' in eventProperty), "Make sure revoke isn't exposed");
});


asyncTest('Add a listener and check it is called with the correct event value', function(){
    var o = new EventedObject();
    Object.defineProperty(o, 'e', {event: true, configurable: false});

    var listenerCalled = false;

    o.e.addListener(function(e){
        listenerCalled = true;
        strictEqual(e, 37, 'Event value is the correct one');
    });

    o.e.fire(37);

    ok(!listenerCalled, 'The listener has been called synchronously while it should not');
    setTimeout(function(){
        ok(listenerCalled);
        // hopefully we've waited long enough and event firing was scheduled to run before this function (we have no control over that)
        start();
    }, 20);
});


asyncTest('Several listeners are called in the order they have been added', function(){
    var o = new EventedObject();
    Object.defineProperty(o, 'e', {event: true, configurable: false});

    var listenerCalls = [];

    o.e.addListener(function(e){
        listenerCalls.push(0);
    });
    o.e.addListener(function(e){
        listenerCalls.push(1);
    });
    o.e.addListener(function(e){
        listenerCalls.push(2);
    });

    o.e.fire();

    setTimeout(function(){
        // hopefully we've waited long enough and event firing was scheduled to run before this function (we have no control over that)
        listenerCalls.forEach(function(e, i){
            strictEqual(e, i);
        });
        start();
    }, 20);
});


asyncTest('Removing one listener', function(){
    var o = new EventedObject();
    Object.defineProperty(o, 'e', {event: true, configurable: false});

    var l1Called = false;
    var l2Called = false;

    function l1(e){
        l1Called = true;
    }
    function l2(e){
        l2Called = true;
    }

    o.e.addListener(l1);
    o.e.addListener(l2);

    o.e.removeListener(l1);

    o.e.fire();

    setTimeout(function(){
        // hopefully we've waited long enough and event firing was scheduled to run before this function (we have no control over that)
        ok(l2Called);
        ok(!l1Called);
        start();
    }, 20);
});

// adding twice the same listener ?
// extracting the fire function
// deleting the event (if extracted any method should throw)
// test listener's 'this'
// What should happen with the set trap?
// more tests for Object.defineProperty (non/configurable, enumerable, etc.)

/** Inheritance
 * test 'this' value
 * make sure listeners added from different objects are called
 *
 *
 */


/*


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