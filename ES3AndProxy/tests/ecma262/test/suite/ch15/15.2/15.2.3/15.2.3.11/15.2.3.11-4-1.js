var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(this);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);