wrapTestObject(function testcase() {
    var b = Object.isSealed(JSON);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);