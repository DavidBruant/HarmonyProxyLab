wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ set: 100 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);