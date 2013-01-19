wrapTestObject(function testcase() {
    try {
        Object.isExtensible(0);
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);