wrapTestObject(function testcase() {
    if (Object.getPrototypeOf.length === 1) {
        return true;
    }
});
runTestCase(testcase);