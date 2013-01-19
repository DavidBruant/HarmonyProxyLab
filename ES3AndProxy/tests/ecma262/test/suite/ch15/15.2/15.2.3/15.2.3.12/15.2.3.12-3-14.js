wrapTestObject(function testcase() {
    var b = Object.isFrozen(Math);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);