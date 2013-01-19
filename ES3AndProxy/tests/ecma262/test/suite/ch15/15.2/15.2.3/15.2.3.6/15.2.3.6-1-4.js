var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty('hello\nworld\\!', 'foo', wrapTestObject({}));
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    });
runTestCase(testcase);