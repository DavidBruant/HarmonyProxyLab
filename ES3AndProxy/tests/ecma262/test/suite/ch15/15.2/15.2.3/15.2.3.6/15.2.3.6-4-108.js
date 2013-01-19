var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function getFunc() {
                return 10;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: setFunc,
            get: undefined
        }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, setFunc, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);