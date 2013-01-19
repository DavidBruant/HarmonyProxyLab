var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, '0', wrapTestObject({
            set: wrapTestObject(function () {
            }),
            configurable: true
        }));
        Object.defineProperty(arrObj, '0', wrapTestObject({ set: undefined }));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, undefined, undefined, false, true);
    });
runTestCase(testcase);