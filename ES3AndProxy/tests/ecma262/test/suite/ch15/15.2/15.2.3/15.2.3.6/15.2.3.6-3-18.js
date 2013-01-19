var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(wrapTestObject({}), 'property', 12);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);