var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Date);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);