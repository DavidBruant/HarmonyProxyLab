wrapTestObject(function testcase() {
    try {
        Object.getOwnPropertyDescriptor(-2, 'foo');
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);