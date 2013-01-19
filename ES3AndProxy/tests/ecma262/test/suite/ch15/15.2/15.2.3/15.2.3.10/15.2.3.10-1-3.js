wrapTestObject(function testcase() {
    try {
        Object.preventExtensions(true);
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);