wrapTestObject(function testcase() {
    try {
        Object.defineProperty(wrapTestObject({}), 'property', null);
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);