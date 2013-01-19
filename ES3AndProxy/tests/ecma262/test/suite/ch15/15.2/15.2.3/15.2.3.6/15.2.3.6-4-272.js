var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            set: setFunc,
            configurable: true
        }));
        Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: false }));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, setFunc, 'setVerifyHelpProp', false, false);
    });
runTestCase(testcase);