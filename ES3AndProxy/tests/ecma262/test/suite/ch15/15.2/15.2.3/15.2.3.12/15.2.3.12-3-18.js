wrapTestObject(function testcase() {
    var b = Object.isFrozen(RegExp.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);