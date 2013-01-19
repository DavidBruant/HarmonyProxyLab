var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var getFunc = wrapTestObject(function () {
                return '100';
            });
        var setFunc = wrapTestObject(function (value) {
                arrObj.setVerifyHelpProp = value;
            });
        var desc = wrapTestObject({
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(arrObj, '0', desc);
        return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, setFunc, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);