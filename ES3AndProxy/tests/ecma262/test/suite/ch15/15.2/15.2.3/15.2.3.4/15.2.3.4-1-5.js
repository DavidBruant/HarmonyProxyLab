var testcase = wrapTestObject(function testcase() {
        try {
            Object.getOwnPropertyNames('abc');
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);