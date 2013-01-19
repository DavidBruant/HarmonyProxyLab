var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var get_func = wrapTestObject(function () {
                return '100';
            });
        var set_func = wrapTestObject(function (value) {
                arr.setVerifyHelpProp = value;
            });
        var descObj = wrapTestObject({
                get: get_func,
                set: set_func,
                enumerable: true,
                configurable: true
            });
        var properties = wrapTestObject({ '0': descObj });
        Object.defineProperty(arr, '0', descObj);
        Object.defineProperties(arr, properties);
        return accessorPropertyAttributesAreCorrect(arr, '0', get_func, set_func, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);