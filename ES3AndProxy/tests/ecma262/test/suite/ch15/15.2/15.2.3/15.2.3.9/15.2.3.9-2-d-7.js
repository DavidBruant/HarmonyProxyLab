wrapTestObject(function testcase() {
    var regObj = wrapTestObject(new RegExp());
    Object.freeze(regObj);
    return Object.isFrozen(regObj);
});
runTestCase(testcase);