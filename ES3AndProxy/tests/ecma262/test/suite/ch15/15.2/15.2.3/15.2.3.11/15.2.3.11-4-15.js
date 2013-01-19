var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Date);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);