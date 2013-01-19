wrapTestObject(function testcase() {
    try {
        Object.isExtensible(true);
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);