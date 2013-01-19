var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun(a, b, c) {
            arg = arguments;
        })(0, 1, 2);
        delete arg[0];
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        var set_func = wrapTestObject(function set_func(value) {
                arg.setVerifyHelpProp = value;
            });
        Object.defineProperties(arg, wrapTestObject({
            '0': wrapTestObject({
                get: get_func,
                set: set_func,
                enumerable: true,
                configurable: true
            })
        }));
        return accessorPropertyAttributesAreCorrect(arg, '0', get_func, set_func, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);