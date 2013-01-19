wrapTestObject(function testcase() {
    var b = Object.isFrozen(RegExp);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);