wrapTestObject(function testcase() {
    var b = Object.isFrozen(String.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);