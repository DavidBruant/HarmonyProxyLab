var testcase = wrapTestObject(function testcase() {
        try {
            Object.isFrozen(true);
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);