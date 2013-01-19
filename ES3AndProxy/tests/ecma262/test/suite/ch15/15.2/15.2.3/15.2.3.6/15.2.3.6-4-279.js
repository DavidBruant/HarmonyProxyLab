var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var getFunc = wrapTestObject(function getFunc() {
                return 12;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 24;
            }),
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(arrObj, 'property', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: false,
            configurable: false
        }));
        return accessorPropertyAttributesAreCorrect(arrObj, 'property', getFunc, setFunc, 'setVerifyHelpProp', false, false);
    });
runTestCase(testcase);