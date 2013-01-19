var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(TypeError);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);