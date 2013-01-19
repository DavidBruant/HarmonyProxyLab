wrapTestObject(function testcase() {
    if (Object.defineProperties.length === 2) {
        return true;
    }
});
runTestCase(testcase);