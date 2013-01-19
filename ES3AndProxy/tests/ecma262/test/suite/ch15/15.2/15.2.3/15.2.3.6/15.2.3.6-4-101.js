wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = 100;
    Object.defineProperty(obj, 'foo', wrapTestObject({ value: undefined }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, true, true, true);
});
runTestCase(testcase);