wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '1', wrapTestObject({ get: undefined }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ get: undefined }) }));
        return accessorPropertyAttributesAreCorrect(arr, '1', undefined, undefined, undefined, false, false);
    } catch (ex) {
        return false;
    }
});
runTestCase(testcase);