var testcase = wrapTestObject(function testcase() {
        'use strict';
        var foo = wrapTestObject(function foo() {
            });
        ;
        Object.defineProperty(foo.prototype, 'bar', wrapTestObject({ value: 'unwritable' }));
        var o = wrapTestObject(new foo());
        try {
            o.bar = 'overridden';
            return false;
        } catch (e) {
            return e instanceof TypeError && o.bar === 'unwritable';
        }
    });
runTestCase(testcase);