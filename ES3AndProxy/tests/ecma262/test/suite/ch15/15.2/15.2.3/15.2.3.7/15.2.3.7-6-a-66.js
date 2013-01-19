wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        enumerable: true,
        configurable: false
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ enumerable: false }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, true, false);
    }
});
runTestCase(testcase);