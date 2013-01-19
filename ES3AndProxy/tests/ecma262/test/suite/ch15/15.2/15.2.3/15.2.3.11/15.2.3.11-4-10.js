var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Boolean);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);