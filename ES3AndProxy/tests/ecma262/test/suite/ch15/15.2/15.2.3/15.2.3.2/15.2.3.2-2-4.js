wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(Function) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);