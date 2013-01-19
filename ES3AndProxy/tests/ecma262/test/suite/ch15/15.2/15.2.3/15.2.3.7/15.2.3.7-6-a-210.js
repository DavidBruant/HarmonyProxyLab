var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '0', wrapTestObject({ value: undefined }));
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: undefined }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', undefined, false, false, false);
    });
runTestCase(testcase);