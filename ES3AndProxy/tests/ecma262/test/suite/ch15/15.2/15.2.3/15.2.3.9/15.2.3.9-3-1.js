wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.freeze(obj);
    return !Object.isExtensible(obj);
});
runTestCase(testcase);