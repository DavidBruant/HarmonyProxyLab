var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Error.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);