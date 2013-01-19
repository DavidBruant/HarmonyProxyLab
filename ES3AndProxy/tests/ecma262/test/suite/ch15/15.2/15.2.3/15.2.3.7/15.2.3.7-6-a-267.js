var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var get_fun = wrapTestObject(function get_fun() {
                return 12;
            });
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperties(arr, wrapTestObject({
            'property': wrapTestObject({
                get: get_fun,
                set: set_fun,
                enumerable: true,
                configurable: true
            })
        }));
        return accessorPropertyAttributesAreCorrect(arr, 'property', get_fun, set_fun, 'setVerifyHelpProp', true, true) && arr.length === 0;
    });
runTestCase(testcase);