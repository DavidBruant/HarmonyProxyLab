wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: get_func,
        set: undefined,
        enumerable: true,
        configurable: true
    }));
    wrapTestObject(function set_func(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_func }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func, set_func, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);