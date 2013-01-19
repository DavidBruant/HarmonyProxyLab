var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function getFunc() {
                return 10;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: undefined,
            get: getFunc,
            enumerable: true,
            configurable: true
        }));
        var setFunc = wrapTestObject(function setFunc(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({ set: setFunc }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, setFunc, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);