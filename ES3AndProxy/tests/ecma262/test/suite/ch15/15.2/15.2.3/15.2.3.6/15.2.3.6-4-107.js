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
            configurable: true
        }));
        var getFunc2 = wrapTestObject(function getFunc2() {
                return 20;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({ get: getFunc2 }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc2, setFunc, 'setVerifyHelpProp', false, true);
    });
runTestCase(testcase);