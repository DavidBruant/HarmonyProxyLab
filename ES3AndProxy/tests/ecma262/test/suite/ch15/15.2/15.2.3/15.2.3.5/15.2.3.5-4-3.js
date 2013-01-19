wrapTestObject(function testcase() {
    try {
        Object.create(wrapTestObject({}), null);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);