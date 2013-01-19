wrapTestObject(function testcase() {
    try {
        Object.defineProperty(undefined, 'foo', wrapTestObject({}));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);