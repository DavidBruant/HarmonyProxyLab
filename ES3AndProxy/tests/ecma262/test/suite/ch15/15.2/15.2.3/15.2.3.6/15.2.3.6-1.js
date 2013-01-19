wrapTestObject(function testcase() {
    try {
        Object.defineProperty(true, 'foo', wrapTestObject({}));
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);