var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Number);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);