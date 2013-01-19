var testcase = wrapTestObject(function testcase() {
        var b = Object.isFrozen(RangeError);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);