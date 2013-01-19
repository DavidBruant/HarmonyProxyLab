wrapTestObject(function testcase() {
    try {
        Object.getPrototypeOf(true);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);