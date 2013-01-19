var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        var set_func = wrapTestObject(function set_func(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: undefined }) }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);