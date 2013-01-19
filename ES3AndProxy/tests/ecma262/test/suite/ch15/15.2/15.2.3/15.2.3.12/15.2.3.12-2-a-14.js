wrapTestObject(function testcase() {
    var obj = wrapTestObject([2]);
    obj.len = 200;
    Object.preventExtensions(obj);
    return !Object.isFrozen(obj);
});
runTestCase(testcase);