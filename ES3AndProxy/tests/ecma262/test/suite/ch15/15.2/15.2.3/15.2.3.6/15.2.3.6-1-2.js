wrapTestObject(function testcase() {
    try {
        Object.defineProperty(null, 'foo', wrapTestObject({}));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);