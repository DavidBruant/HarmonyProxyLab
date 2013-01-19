wrapTestObject(function testcase() {
    var b = Object.isSealed(Object.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);