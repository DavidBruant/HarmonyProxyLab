wrapTestObject(function testcase() {
    try {
        Object.keys(null);
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);