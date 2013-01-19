var testcase = wrapTestObject(function testcase() {
        try {
            Object.getOwnPropertyNames(null);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);