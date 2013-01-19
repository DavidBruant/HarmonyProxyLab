wrapTestObject(function testcase() {
    var b = Object.isSealed(ReferenceError);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);