var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(ReferenceError);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);