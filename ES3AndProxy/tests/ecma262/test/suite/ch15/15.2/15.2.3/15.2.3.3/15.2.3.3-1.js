var testcase = wrapTestObject(function testcase() {
        try {
            Object.getOwnPropertyDescriptor(0, 'foo');
        } catch (e) {
            if (e instanceof TypeError) {
                return true;
            }
        }
    });
runTestCase(testcase);