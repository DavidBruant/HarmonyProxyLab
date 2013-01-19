var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var setFun = wrapTestObject(function (value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperties(obj, wrapTestObject({
            prop: wrapTestObject({
                set: setFun,
                enumerable: true,
                configurable: true
            })
        }));
        return accessorPropertyAttributesAreCorrect(obj, 'prop', undefined, setFun, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);