wrapTestObject(function testcase() {
    var b = Object.isFrozen(Function);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);