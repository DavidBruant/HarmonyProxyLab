var testcase = wrapTestObject(function testcase() {
        try {
            Object.getOwnPropertyNames(undefined);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);