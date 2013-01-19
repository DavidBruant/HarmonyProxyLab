wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = 10;
    var preCheck = Object.isExtensible(obj);
    Object.seal(obj);
    delete obj.foo;
    return preCheck && obj.foo === 10;
});
runTestCase(testcase);