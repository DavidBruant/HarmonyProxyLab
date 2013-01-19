var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, '1', wrapTestObject({
            get: undefined,
            set: setFunc,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ get: undefined }));
            return accessorPropertyAttributesAreCorrect(arrObj, '1', undefined, setFunc, 'setVerifyHelpProp', false, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);