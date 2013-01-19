var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(String);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);