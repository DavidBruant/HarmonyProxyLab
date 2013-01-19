wrapTestObject(function testcase() {
    try {
        Object.preventExtensions('abc');
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);