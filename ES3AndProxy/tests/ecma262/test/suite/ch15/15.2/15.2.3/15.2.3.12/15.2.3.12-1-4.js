wrapTestObject(function testcase() {
    try {
        Object.isFrozen('abc');
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);