var testcase = wrapTestObject(function testcase() {
        if (Object.create.length === 2) {
            return true;
        }
    });
runTestCase(testcase);