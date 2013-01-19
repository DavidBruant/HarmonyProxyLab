wrapTestObject(function testcase() {
    var b = Object.isFrozen(Object.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);