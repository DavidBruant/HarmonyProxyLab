var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Math);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);