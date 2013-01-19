wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: undefined,
        enumerable: true,
        writable: true,
        configurable: true
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 200 }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 200, true, true, true);
});
runTestCase(testcase);