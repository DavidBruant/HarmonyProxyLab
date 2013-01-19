wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: undefined,
        writable: false,
        configurable: false
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: undefined }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, false, false);
});
runTestCase(testcase);