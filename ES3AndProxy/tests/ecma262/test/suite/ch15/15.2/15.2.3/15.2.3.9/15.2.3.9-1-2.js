wrapTestObject(function testcase() {
    try {
        Object.freeze(null);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);