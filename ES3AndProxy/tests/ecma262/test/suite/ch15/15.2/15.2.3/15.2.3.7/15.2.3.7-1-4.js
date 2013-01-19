var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperties('abc', wrapTestObject({}));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);