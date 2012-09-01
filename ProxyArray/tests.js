"use strict";

var a = new ProxyArray();

test('init', function(){
    strictEqual(a.length, 0);
    strictEqual(Object.getPrototypeOf(a), Array.prototype);
});

test('zero', function(){
    a[0] = 'a';
    strictEqual(a[0], 'a');
    strictEqual(a.length, 1);
});

test('one', function(){
    a[1] = 32;
    strictEqual(a[1], 32);
    strictEqual(a.length, 2);
});

test('13', function(){
    a[13] = 12345;
    strictEqual(a[13], 12345);
    strictEqual(14);
});

test('after setting length to something smaller than it was', function(){
    a.length = 10;
    ok( !(13 in a) );
    strictEqual(a.length, 10);
});

/*
 var b = new ProxyArray(-1, 0, 1, 2, 3, 4);
 console.log(b.some(function(e){return e>0;}));
 */
