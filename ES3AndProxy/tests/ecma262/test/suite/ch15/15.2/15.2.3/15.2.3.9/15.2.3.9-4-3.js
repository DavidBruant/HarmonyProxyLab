wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = 10;
    Object.preventExtensions(obj);
    Object.freeze(obj);
    return Object.isFrozen(obj);
});
runTestCase(testcase);