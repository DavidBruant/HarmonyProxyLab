var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(SyntaxError);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);