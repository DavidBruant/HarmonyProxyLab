var testcase = wrapTestObject(function testcase() {
        try {
            Object.getOwnPropertyDescriptor(true, 'foo');
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);