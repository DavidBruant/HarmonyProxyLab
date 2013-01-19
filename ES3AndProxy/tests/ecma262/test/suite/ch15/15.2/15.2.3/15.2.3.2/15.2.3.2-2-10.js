wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(RegExp) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);