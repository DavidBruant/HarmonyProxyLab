var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Date.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);