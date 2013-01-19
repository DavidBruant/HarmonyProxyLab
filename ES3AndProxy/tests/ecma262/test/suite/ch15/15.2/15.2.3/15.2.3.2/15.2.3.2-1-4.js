var testcase = wrapTestObject(function testcase() {
        try {
            Object.getPrototypeOf('abc');
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);