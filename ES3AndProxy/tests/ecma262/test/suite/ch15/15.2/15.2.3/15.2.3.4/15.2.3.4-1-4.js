wrapTestObject(function testcase() {
    try {
        Object.getOwnPropertyNames(true);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);