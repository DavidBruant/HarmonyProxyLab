wrapTestObject(function testcase() {
    try {
        Object.seal(null);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);