var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var setFunc = wrapTestObject(function setFunc(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: setFunc,
            configurable: false
        }));
        var getFunc = wrapTestObject(function getFunc() {
                return 10;
            });
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({
                get: getFunc,
                set: setFunc
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, setFunc, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);