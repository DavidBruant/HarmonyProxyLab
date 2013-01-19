wrapTestObject(function testcase() {
    var boolObj = wrapTestObject(new Boolean(false));
    Object.freeze(boolObj);
    return Object.isFrozen(boolObj);
});
runTestCase(testcase);