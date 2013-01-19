wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: false,
        writable: false,
        configurable: false
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: true }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', false, false, false, false);
    }
});
runTestCase(testcase);