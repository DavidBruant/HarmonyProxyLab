wrapTestObject(function testcase() {
    try {
        Object.defineProperty(5, 'foo', wrapTestObject({}));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);