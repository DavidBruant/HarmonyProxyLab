var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Date.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);