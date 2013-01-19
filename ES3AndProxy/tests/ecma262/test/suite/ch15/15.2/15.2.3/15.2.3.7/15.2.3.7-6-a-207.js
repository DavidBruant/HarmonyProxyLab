wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    wrapTestObject(function get_func() {
        return 11;
    });
    wrapTestObject(function set_func(value) {
        arr.setVerifyHelpProp = value;
    });
    Object.defineProperty(arr, '0', wrapTestObject({
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({}) }));
        return accessorPropertyAttributesAreCorrect(arr, '0', get_func, set_func, 'setVerifyHelpProp', true, true);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);