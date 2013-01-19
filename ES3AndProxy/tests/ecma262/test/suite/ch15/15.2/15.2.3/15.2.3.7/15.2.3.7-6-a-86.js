var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var set_func = wrapTestObject(function set_func(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: set_func,
            configurable: false
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_func }) }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func, 'setVerifyHelpProp', false, false);
    });
runTestCase(testcase);