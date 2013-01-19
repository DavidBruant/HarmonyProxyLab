var testcase = wrapTestObject(function testcase() {
        try {
            Object.freeze(0);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);