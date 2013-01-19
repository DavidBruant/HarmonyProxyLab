var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Boolean);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);