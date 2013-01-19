var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Error);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);