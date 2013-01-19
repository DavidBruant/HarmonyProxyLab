var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var setFunc = wrapTestObject(function setFunc(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: setFunc,
            configurable: false
        }));
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({ set: setFunc }));
            return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, setFunc, 'setVerifyHelpProp', false, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);