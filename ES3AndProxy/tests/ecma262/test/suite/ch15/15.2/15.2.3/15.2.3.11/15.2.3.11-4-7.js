var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Array.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);