wrapTestObject(function testcase() {
    try {
        Object.getPrototypeOf(0);
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);