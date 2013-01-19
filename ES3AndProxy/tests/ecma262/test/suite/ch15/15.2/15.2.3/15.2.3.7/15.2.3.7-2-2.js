wrapTestObject(function testcase() {
    try {
        Object.defineProperties(wrapTestObject({}), undefined);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);