wrapTestObject(function testcase() {
    var b = Object.isSealed(Function);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);