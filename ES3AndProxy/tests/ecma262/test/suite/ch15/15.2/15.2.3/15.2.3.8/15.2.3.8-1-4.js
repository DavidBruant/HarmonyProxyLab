wrapTestObject(function testcase() {
    try {
        Object.seal('abc');
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);