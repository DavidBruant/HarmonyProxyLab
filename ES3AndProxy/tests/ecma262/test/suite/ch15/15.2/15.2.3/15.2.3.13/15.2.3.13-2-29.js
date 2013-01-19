wrapTestObject(function testcase() {
    return Object.isExtensible(fnGlobalObject());
});
runTestCase(testcase);