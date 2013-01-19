wrapTestObject(function testcase() {
    var b = Object.isSealed(String.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);