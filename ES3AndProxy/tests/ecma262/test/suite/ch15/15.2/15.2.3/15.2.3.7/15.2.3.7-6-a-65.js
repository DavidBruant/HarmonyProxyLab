wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        configurable: false
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ configurable: true }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, false, false);
    }
});
runTestCase(testcase);