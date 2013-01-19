var testcase = wrapTestObject(function testcase() {
        if (Object.preventExtensions.length === 1) {
            return true;
        }
    });
runTestCase(testcase);