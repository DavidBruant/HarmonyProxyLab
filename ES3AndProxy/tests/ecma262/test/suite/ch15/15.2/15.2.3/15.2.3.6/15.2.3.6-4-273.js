var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        var getFunc = wrapTestObject(function getFunc() {
                return 12;
            });
        Object.defineProperty(arrObj, '1', wrapTestObject({
            get: wrapTestObject(function () {
                return 6;
            }),
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(arrObj, '1', wrapTestObject({
            get: getFunc,
            enumerable: false,
            configurable: false
        }));
        return accessorPropertyAttributesAreCorrect(arrObj, '1', getFunc, setFunc, 'setVerifyHelpProp', false, false);
    });
runTestCase(testcase);