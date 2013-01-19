var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function (value) {
                arrObj.setVerifyHelpProp = value;
            });
        var getFunc = wrapTestObject(function () {
                return 14;
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            }),
            set: wrapTestObject(function () {
            }),
            configurable: true,
            enumerable: true
        }));
        Object.defineProperty(arrObj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc,
            configurable: false,
            enumerable: false
        }));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, setFunc, 'setVerifyHelpProp', false, false);
    });
runTestCase(testcase);