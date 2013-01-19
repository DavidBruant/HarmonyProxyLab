wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.preventExtensions(obj);
    return !Object.isExtensible(obj);
});
runTestCase(testcase);