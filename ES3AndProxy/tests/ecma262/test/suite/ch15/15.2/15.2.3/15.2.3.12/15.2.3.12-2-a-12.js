wrapTestObject(function testcase() {
    var obj = wrapTestObject(new String('abc'));
    obj.len = 100;
    Object.preventExtensions(obj);
    return !Object.isFrozen(obj);
});
runTestCase(testcase);