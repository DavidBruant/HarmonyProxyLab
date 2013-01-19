wrapTestObject(function testcase() {
    try {
        Object.isFrozen(undefined);
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);