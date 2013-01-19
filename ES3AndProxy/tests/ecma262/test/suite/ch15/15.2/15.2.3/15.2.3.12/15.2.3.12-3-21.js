wrapTestObject(function testcase() {
    var b = Object.isFrozen(EvalError);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);