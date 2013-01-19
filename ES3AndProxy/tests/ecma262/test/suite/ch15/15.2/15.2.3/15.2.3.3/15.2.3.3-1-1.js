var testcase = wrapTestObject(function testcase() {
        try {
            Object.getOwnPropertyDescriptor(undefined, 'foo');
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);