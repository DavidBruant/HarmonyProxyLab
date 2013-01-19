var testcase = wrapTestObject(function testcase() {
        try {
            Object.freeze('abc');
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);