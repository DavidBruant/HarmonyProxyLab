wrapTestObject(function testcase() {
    var b = Object.isSealed(Number.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);