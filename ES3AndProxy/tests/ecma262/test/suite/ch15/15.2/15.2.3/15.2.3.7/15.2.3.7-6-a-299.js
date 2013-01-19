var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun() {
            arg = arguments;
        })();
        var get_func = wrapTestObject(function get_func() {
                return 0;
            });
        Object.defineProperty(arg, '0', wrapTestObject({
            get: get_func,
            set: undefined,
            enumerable: false,
            configurable: false
        }));
        var set_func = wrapTestObject(function set_func(value) {
                arg.setVerifyHelpProp = value;
            });
        try {
            Object.defineProperties(arg, wrapTestObject({ '0': wrapTestObject({ set: set_func }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arg, '0', get_func, undefined, undefined, false, false);
        }
    });
runTestCase(testcase);