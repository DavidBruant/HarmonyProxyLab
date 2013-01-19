wrapTestObject(function testcase() {
    try {
        Object.create(2);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);