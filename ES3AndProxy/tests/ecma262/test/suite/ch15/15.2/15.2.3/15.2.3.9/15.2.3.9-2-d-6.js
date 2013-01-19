wrapTestObject(function testcase() {
    var dateObj = wrapTestObject(new Date());
    Object.freeze(dateObj);
    return Object.isFrozen(dateObj);
});
runTestCase(testcase);