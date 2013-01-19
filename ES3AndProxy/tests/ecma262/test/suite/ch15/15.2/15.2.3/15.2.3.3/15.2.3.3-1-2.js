var testcase = wrapTestObject(function testcase() {
        try {
            Object.getOwnPropertyDescriptor(null, 'foo');
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);