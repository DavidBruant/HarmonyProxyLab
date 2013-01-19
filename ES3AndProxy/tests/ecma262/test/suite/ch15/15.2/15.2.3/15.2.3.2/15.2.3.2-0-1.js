wrapTestObject(function testcase() {
    if (typeof Object.getPrototypeOf === 'function') {
        return true;
    }
});
runTestCase(testcase);