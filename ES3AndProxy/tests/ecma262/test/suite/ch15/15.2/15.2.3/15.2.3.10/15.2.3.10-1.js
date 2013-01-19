wrapTestObject(function testcase() {
    try {
        Object.preventExtensions(0);
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);