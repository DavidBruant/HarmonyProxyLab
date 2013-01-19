wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 'abcd',
        writable: false,
        configurable: false
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 'defg' }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', 'abcd', false, false, false);
    }
});
runTestCase(testcase);