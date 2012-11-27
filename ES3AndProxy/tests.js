"use strict";

test('init', function(){
    var o = new Object(); // avoid using {}, otherwise, it won't work

    o.a = 1;

    var desc = Object.getOwnPropertyDescriptor(o, 'a');
    strictEqual(desc.value, 1);
    strictEqual(desc.configurable, true);
    strictEqual(desc.enumerable, true);
    strictEqual(desc.writable, true);
});

