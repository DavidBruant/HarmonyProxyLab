wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: +0,
        writable: false,
        configurable: false
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: -0 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', +0, false, false, false);
    }
});
runTestCase(testcase);