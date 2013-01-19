var testcase = wrapTestObject(function testcase() {
        try {
            Object.seal(0);
        } catch (e) {
            if (e instanceof TypeError) {
                return true;
            }
        }
    });
runTestCase(testcase);