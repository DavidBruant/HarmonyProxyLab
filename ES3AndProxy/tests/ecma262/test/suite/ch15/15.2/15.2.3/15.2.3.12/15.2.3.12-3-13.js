wrapTestObject(function testcase() {
    var b = Object.isFrozen(Number.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);