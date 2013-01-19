wrapTestObject(function testcase() {
    try {
        Object.isSealed(0);
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);