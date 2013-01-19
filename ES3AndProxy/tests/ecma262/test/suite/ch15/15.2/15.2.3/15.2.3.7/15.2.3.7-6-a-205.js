var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({
            '0': wrapTestObject({
                get: wrapTestObject(function () {
                    return 11;
                }),
                set: wrapTestObject(function () {
                }),
                configurable: true,
                enumerable: true
            })
        }));
        var setFun = wrapTestObject(function (value) {
                arr.setVerifyHelpProp = value;
            });
        var getFun = wrapTestObject(function () {
                return 14;
            });
        Object.defineProperties(arr, wrapTestObject({
            '0': wrapTestObject({
                get: getFun,
                set: setFun,
                configurable: false,
                enumerable: false
            })
        }));
        return accessorPropertyAttributesAreCorrect(arr, '0', getFun, setFun, 'setVerifyHelpProp', false, false);
    });
runTestCase(testcase);