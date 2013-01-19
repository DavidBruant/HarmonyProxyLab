var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(Object);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);