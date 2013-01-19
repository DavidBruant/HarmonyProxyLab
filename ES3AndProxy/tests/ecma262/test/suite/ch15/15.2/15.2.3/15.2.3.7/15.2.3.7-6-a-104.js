wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 10;
    });
    wrapTestObject(function set_func() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    }));
    wrapTestObject(function set_func2(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_func2 }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func, set_func2, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);