wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: undefined }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: undefined }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, false, false, false);
});
runTestCase(testcase);