wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(SyntaxError) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);