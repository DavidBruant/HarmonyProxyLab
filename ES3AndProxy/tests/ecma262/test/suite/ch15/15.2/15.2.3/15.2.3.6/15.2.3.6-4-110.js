var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var setFunc1 = wrapTestObject(function setFunc1() {
                return 10;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: setFunc1,
            enumerable: true,
            configurable: true
        }));
        var setFunc2 = wrapTestObject(function setFunc2(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({ set: setFunc2 }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, setFunc2, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);