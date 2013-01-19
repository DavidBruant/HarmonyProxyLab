wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(TypeError) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);