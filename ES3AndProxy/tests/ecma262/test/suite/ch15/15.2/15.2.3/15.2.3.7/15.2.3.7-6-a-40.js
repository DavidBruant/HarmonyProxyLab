wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 0;
    });
    wrapTestObject(function set_func(value) {
        obj.setVerifyHelpProp = value;
    });
    var desc = wrapTestObject({
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        });
    Object.defineProperty(obj, 'foo', desc);
    Object.defineProperties(obj, wrapTestObject({
        foo: wrapTestObject({
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        })
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func, set_func, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);