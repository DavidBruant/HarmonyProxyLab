wrapTestObject(function testcase() {
    try {
        Object.seal(false);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);