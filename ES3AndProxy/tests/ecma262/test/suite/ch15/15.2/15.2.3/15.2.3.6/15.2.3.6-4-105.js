wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 200,
        enumerable: true,
        writable: true,
        configurable: true
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({ configurable: false }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 200, true, true, false);
});
runTestCase(testcase);