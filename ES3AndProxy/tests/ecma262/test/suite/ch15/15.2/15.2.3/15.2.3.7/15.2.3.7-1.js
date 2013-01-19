var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperties(0, wrapTestObject({}));
        } catch (e) {
            if (e instanceof TypeError) {
                return true;
            }
        }
    });
runTestCase(testcase);