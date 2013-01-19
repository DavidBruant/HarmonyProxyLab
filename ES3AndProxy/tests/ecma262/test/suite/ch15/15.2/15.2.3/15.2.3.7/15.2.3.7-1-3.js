wrapTestObject(function testcase() {
    try {
        Object.defineProperties(true, wrapTestObject({}));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);