var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(this);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);