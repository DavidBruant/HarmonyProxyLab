var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var getFunc = wrapTestObject(function getFunc() {
                return 12;
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            get: getFunc,
            configurable: true
        }));
        Object.defineProperty(arrObj, '0', wrapTestObject({ get: undefined }));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, undefined, undefined, false, true);
    });
runTestCase(testcase);