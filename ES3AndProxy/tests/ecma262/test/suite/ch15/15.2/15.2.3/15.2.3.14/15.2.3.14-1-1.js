var testcase = wrapTestObject(function testcase() {
        try {
            Object.keys(0);
        } catch (e) {
            if (e instanceof TypeError) {
                return true;
            }
        }
    });
runTestCase(testcase);