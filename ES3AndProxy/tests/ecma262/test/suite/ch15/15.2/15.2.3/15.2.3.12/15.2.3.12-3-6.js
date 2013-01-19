var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(Array);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);