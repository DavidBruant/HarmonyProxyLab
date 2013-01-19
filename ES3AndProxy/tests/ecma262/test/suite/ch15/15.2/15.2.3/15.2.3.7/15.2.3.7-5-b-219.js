wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ get: false }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);