wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function set_func(value) {
        obj.setVerifyHelpProp = value;
    });
    wrapTestObject(function get_func() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: get_func,
        set: set_func,
        enumerable: false,
        configurable: false
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_func }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func, set_func, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);