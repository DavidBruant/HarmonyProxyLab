wrapTestObject(function testcase() {
    if (Object.defineProperty.length === 3) {
        return true;
    }
});
runTestCase(testcase);