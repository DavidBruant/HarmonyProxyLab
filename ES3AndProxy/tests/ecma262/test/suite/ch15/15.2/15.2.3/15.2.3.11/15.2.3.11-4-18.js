var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(RegExp.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);