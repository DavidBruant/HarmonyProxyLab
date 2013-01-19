wrapTestObject(function testcase() {
    try {
        Object.create(0);
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
});
runTestCase(testcase);