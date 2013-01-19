wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({}));
    return dataPropertyAttributesAreCorrect(obj, 'property', undefined, false, false, false);
});
runTestCase(testcase);