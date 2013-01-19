wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(Object) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);