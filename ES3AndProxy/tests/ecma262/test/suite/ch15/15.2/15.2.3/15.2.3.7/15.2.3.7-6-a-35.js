var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFun = wrapTestObject(function () {
                return 10;
            });
        var setFun = wrapTestObject(function (value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperties(obj, wrapTestObject({
            prop: wrapTestObject({
                set: setFun,
                get: getFun,
                configurable: true
            })
        }));
        return accessorPropertyAttributesAreCorrect(obj, 'prop', getFun, setFun, 'setVerifyHelpProp', false, true);
    });
runTestCase(testcase);