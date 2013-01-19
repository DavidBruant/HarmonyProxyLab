var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Boolean.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);