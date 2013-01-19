wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        configurable: false
    }));
    wrapTestObject(function get_func() {
        return 11;
    });
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_func }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, false, false);
    }
});
runTestCase(testcase);