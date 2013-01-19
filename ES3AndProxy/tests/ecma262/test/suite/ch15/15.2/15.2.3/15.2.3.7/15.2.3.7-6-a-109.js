wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func1() {
        return 10;
    });
    wrapTestObject(function set_func1() {
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: get_func1,
        set: set_func1,
        configurable: true
    }));
    wrapTestObject(function get_func2() {
        return 20;
    });
    wrapTestObject(function set_func2(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperties(obj, wrapTestObject({
        foo: wrapTestObject({
            get: get_func2,
            set: set_func2,
            configurable: false
        })
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', get_func2, set_func2, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);