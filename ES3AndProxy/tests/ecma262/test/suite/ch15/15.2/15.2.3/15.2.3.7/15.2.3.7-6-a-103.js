var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var set_func = wrapTestObject(function set_func(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: undefined,
            set: set_func,
            enumerable: true,
            configurable: true
        }));
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_func }) }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func, set_func, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);