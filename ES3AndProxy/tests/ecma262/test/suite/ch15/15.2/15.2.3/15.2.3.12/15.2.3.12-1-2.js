var testcase = wrapTestObject(function testcase() {
        try {
            Object.isFrozen(null);
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);