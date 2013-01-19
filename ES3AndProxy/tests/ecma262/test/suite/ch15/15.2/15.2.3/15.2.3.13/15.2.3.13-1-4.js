var testcase = wrapTestObject(function testcase() {
        try {
            Object.isExtensible('abc');
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);