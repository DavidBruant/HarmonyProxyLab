var testcase = wrapTestObject(function testcase() {
        try {
            Object.keys(undefined);
        } catch (e) {
            if (e instanceof TypeError) {
                return true;
            }
        }
    });
runTestCase(testcase);