wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(ReferenceError) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);