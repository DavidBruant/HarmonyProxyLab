var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Error);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);