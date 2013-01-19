var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Error.prototype);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);