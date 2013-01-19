wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 10;
    });
    wrapTestObject(function set_func(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ configurable: false }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func, set_func, 'setVerifyHelpProp', true, false);
});
runTestCase(testcase);