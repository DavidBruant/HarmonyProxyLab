wrapTestObject(function testcase() {
    try {
        Object.defineProperties(wrapTestObject({}), null);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);