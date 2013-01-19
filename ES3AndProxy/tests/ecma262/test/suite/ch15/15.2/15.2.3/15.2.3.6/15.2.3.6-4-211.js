var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var getFunc = wrapTestObject(function getFunc() {
                return 11;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(arrObj, '0', wrapTestObject({}));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, setFunc, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);