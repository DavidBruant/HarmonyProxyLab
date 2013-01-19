wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: null,
        writable: false,
        configurable: false
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: null }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', null, false, false, false);
});
runTestCase(testcase);