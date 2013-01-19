wrapTestObject(function testcase() {
    wrapTestObject(function foo() {
    });
    ;
    Object.defineProperty(foo.prototype, 'bar', wrapTestObject({ value: 'unwritable' }));
    var o = wrapTestObject(new foo());
    o.bar = 'overridden';
    return o.hasOwnProperty('bar') === false && o.bar === 'unwritable';
});
runTestCase(testcase);