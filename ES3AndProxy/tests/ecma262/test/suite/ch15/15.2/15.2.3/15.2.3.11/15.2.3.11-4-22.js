wrapTestObject(function testcase() {
    var b = Object.isSealed(RangeError);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);