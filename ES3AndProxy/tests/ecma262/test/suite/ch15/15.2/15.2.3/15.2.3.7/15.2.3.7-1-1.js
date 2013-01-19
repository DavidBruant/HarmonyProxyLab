wrapTestObject(function testcase() {
    try {
        Object.defineProperties(undefined, wrapTestObject({}));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);