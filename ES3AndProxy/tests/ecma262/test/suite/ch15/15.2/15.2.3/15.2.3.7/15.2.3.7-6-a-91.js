var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var set_func = wrapTestObject(function set_func(value) {
                obj.setVerifyHelpProp = value;
            });
        var get_func1 = wrapTestObject(function get_func1() {
                return 10;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: get_func1,
            set: set_func,
            enumerable: false,
            configurable: false
        }));
        var get_func2 = wrapTestObject(function get_func2() {
                return 20;
            });
        try {
            Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_func2 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'foo', get_func1, set_func, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);