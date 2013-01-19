wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = 10;
    Object.seal(obj);
    Object.freeze(obj);
    return Object.isFrozen(obj);
});
runTestCase(testcase);