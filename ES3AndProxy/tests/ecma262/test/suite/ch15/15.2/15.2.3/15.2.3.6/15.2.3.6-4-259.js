var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([100]);
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: undefined }));
        return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, true, true, true);
    });
runTestCase(testcase);