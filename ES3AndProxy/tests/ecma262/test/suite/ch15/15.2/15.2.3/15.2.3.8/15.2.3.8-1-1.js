var testcase = wrapTestObject(function testcase() {
        try {
            Object.seal(undefined);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);