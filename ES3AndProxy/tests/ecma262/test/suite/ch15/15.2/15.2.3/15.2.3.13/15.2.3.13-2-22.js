wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    return Object.isExtensible(obj);
});
runTestCase(testcase);