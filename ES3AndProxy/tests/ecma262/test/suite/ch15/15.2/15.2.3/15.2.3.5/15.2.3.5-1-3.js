wrapTestObject(function testcase() {
    try {
        Object.create(true);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);