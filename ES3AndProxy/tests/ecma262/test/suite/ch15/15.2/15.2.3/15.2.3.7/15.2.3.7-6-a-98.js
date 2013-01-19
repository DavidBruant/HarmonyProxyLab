wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 200,
        enumerable: false,
        writable: true,
        configurable: true
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ enumerable: true }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 200, true, true, true);
});
runTestCase(testcase);