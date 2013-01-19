var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun() {
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
                enumerable: false,
                configurable: false
            })
        }));
        return accessorPropertyAttributesAreCorrect(arg, '0', get_func, set_func, 'setVerifyHelpProp', false, false);
    });
runTestCase(testcase);