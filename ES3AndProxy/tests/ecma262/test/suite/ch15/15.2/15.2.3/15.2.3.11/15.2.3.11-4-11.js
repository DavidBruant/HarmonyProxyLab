var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Boolean.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);