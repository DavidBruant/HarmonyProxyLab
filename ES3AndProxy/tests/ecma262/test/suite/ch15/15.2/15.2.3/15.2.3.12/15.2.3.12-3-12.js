wrapTestObject(function testcase() {
    var b = Object.isFrozen(Number);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);