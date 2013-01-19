var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(String);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);