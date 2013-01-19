var testcase = wrapTestObject(function testcase() {
        try {
            Object.isExtensible(null);
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);