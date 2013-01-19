wrapTestObject(function testcase() {
    try {
        Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ set: 'abc' }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);