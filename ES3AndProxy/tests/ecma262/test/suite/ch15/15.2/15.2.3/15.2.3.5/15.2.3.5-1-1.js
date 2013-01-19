wrapTestObject(function testcase() {
    try {
        Object.create(undefined);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);