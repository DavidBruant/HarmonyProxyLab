wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '1', wrapTestObject({ set: undefined }));
    Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ set: undefined }) }));
    return accessorPropertyAttributesAreCorrect(arr, '1', undefined, undefined, undefined, false, false);
});
runTestCase(testcase);