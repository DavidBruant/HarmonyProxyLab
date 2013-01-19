wrapTestObject(function testcase() {
    var b = Object.isSealed(RegExp);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);