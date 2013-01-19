var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, 'property', wrapTestObject({
            set: setFunc,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, 'property', wrapTestObject({ configurable: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, 'property', undefined, setFunc, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);