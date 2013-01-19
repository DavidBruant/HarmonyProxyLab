var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var set_func = wrapTestObject(function set_func(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: undefined,
            set: set_func,
            enumerable: false,
            configurable: false
        }));
        var get_func = wrapTestObject(function get_func() {
                return 0;
            });
        try {
            Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_func }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);