var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function (value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, setFunc, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);