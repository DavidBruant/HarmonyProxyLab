var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(wrapTestObject({}), 'property', true);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);