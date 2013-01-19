wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({ configurable: true }));
    Object.defineProperty(obj, 'foo', wrapTestObject({ configurable: false }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, false, false);
});
runTestCase(testcase);