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
    wrapTestObject(function get_func2() {
        return 20;
    });
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_func2 }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func2, set_func, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);