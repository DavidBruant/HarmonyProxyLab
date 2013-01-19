wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(EvalError) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);