wrapTestObject(function testcase() {
    try {
        Object.isExtensible(undefined);
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);