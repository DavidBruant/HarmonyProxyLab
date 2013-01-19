var testcase = wrapTestObject(function testcase() {
        try {
            Object.getPrototypeOf(null);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);