var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, '1', wrapTestObject({
            set: setFunc,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, '1', wrapTestObject({ value: 13 }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, '1', undefined, setFunc, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);