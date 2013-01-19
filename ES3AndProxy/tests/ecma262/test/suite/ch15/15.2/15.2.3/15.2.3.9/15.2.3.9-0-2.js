var testcase = wrapTestObject(function testcase() {
        if (Object.freeze.length === 1) {
            return true;
        }
    });
runTestCase(testcase);