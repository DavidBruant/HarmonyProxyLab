wrapTestObject(function testcase() {
    var errObj = wrapTestObject(new SyntaxError());
    Object.freeze(errObj);
    return Object.isFrozen(errObj);
});
runTestCase(testcase);