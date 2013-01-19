wrapTestObject(function testcase() {
    if (Object.getOwnPropertyDescriptor.length === 2) {
        return true;
    }
});
runTestCase(testcase);