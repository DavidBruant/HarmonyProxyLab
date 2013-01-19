wrapTestObject(function testcase() {
    try {
        Object.create(wrapTestObject({}), wrapTestObject({ prop: null }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);