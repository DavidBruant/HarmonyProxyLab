wrapTestObject(function testcase() {
    try {
        Object.keys('abc');
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);