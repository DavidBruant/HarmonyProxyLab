wrapTestObject(function testcase() {
    try {
        Object.preventExtensions(undefined);
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);