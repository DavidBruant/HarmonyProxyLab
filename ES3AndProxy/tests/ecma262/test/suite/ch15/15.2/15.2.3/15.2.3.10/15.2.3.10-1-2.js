wrapTestObject(function testcase() {
    try {
        Object.preventExtensions(null);
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);