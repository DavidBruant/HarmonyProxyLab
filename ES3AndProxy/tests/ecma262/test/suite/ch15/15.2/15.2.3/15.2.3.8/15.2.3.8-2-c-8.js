wrapTestObject(function testcase() {
    var errObj = wrapTestObject(new Error());
    var preCheck = Object.isExtensible(errObj);
    Object.seal(errObj);
    return preCheck && Object.isSealed(errObj);
});
runTestCase(testcase);