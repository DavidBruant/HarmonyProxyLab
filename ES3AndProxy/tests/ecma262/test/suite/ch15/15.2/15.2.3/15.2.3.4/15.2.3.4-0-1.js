wrapTestObject(function testcase() {
    if (typeof Object.getOwnPropertyNames === 'function') {
        return true;
    }
});
runTestCase(testcase);