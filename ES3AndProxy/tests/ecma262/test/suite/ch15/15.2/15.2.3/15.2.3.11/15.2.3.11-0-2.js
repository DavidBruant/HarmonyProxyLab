var testcase = wrapTestObject(function testcase() {
        if (Object.isSealed.length === 1) {
            return true;
        }
    });
runTestCase(testcase);