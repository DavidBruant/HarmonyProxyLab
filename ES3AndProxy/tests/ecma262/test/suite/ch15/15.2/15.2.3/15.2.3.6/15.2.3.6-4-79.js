wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({ enumerable: false }));
    Object.defineProperty(obj, 'foo', wrapTestObject({ enumerable: false }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, false, false);
});
runTestCase(testcase);