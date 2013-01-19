var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(SyntaxError);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);