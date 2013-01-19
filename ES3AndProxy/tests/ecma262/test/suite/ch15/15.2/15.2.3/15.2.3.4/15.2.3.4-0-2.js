var testcase = wrapTestObject(function testcase() {
        if (Object.getOwnPropertyNames.length === 1) {
            return true;
        }
    });
runTestCase(testcase);