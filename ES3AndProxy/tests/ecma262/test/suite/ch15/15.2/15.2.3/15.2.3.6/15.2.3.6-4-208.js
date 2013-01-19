var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc = wrapTestObject(function (value) {
                arrObj.setVerifyHelpProp = value;
            });
        var getFunc = wrapTestObject(function () {
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            set: setFunc,
            get: getFunc,
            enumerable: true
        }));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, setFunc, 'setVerifyHelpProp', true, false);
    });
runTestCase(testcase);