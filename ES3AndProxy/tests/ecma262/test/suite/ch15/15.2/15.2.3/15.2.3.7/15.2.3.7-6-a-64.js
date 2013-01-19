wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        configurable: true
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ configurable: false }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, false, false);
});
runTestCase(testcase);