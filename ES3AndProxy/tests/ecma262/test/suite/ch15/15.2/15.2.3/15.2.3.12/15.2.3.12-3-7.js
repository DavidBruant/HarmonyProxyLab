wrapTestObject(function testcase() {
    var b = Object.isFrozen(Array.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);