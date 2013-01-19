wrapTestObject(function testcase() {
    try {
        Object.getPrototypeOf();
    } catch (e) {
        if (e instanceof TypeError)
            return true;
    }
});
runTestCase(testcase);