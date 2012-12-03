"use strict";

function sameDesc(desc1, desc2){
    strictEqual(desc1.configurable, desc2.configurable);
    strictEqual(desc1.enumerable, desc2.enumerable);
    strictEqual(desc1.value, desc2.value);
    strictEqual(desc1.writable, desc2.writable);
    strictEqual(desc1.get, desc2.get);
    strictEqual(desc1.set, desc2.set);
}

function inArray(a, v){
    // indexOf doesn't check for NaN *sigh*
    return a.indexOf(v) !== -1;
}

function sameArrayValues(a1, a2){
    ok(a1.every(inArray.bind(undefined, a2)));
    ok(a2.every(inArray.bind(undefined, a1)));
}

test('init', function(){
    var o = new Object(); // avoid using {}, otherwise, it won't work

    o.a = 1;

    var desc = Object.getOwnPropertyDescriptor(o, 'a');
    sameDesc(desc, {
        value: 1,
        configurable: true,
        enumerable: true,
        writable: true
    });
});

test('Object.defineProperty data property', function () {
    var o = new Object();

    var desc = {
        value:37,
        enumerable:false,
        writable:false,
        configurable:true
    };

    Object.defineProperty(o, 'a', desc);

    var descRet = Object.getOwnPropertyDescriptor(o, 'a');
    sameDesc(desc, descRet);
});