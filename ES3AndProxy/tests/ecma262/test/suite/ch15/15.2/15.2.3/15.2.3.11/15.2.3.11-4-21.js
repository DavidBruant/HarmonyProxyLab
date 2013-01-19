var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(EvalError);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);