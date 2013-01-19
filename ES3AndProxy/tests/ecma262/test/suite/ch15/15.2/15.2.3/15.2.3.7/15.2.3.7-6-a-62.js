wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        enumerable: false,
        configurable: true
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ enumerable: true }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, true, true);
});
runTestCase(testcase);