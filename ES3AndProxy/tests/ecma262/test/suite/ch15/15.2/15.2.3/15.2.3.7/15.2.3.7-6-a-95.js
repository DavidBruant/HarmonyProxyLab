wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 200,
        enumerable: true,
        writable: true,
        configurable: true
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: undefined }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, true, true, true);
});
runTestCase(testcase);