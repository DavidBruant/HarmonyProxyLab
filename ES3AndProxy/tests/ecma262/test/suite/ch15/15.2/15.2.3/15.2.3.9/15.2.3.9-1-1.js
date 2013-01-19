wrapTestObject(function testcase() {
    try {
        Object.freeze(undefined);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);