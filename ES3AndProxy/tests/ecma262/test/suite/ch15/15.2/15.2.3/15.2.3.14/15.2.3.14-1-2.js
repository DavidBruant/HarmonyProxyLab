var testcase = wrapTestObject(function testcase() {
        try {
            Object.keys(true);
        } catch (e) {
            if (e instanceof TypeError) {
                return true;
            }
        }
    });
runTestCase(testcase);