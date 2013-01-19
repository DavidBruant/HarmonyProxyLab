var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var setFunc = wrapTestObject(function (value) {
                obj.setVerifyHelpProp = value;
            });
        var getFunc = wrapTestObject(function () {
                return 10;
            });
        Object.defineProperty(obj, 'property', wrapTestObject({
            set: setFunc,
            get: getFunc,
            enumerable: true
        }));
        return accessorPropertyAttributesAreCorrect(obj, 'property', getFunc, setFunc, 'setVerifyHelpProp', true, false);
    });
runTestCase(testcase);