wrapTestObject(function testcase() {
    var b = Object.isSealed(Array);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);