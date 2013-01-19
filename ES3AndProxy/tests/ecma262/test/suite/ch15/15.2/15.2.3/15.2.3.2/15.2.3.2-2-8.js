wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(Math) === Object.prototype) {
        return true;
    }
});
runTestCase(testcase);