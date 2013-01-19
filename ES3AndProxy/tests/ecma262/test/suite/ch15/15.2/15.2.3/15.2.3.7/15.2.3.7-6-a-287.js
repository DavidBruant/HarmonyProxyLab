wrapTestObject(function testcase() {
    var arg;
    wrapTestObject(function fun(a, b, c) {
        arg = arguments;
    })(0, 1, 2);
    wrapTestObject(function get_func() {
        return 0;
    });
    Object.defineProperty(arg, '0', wrapTestObject({
        get: get_func,
        set: undefined,
        enumerable: false,
        configurable: false
    }));
    wrapTestObject(function set_func(value) {
        arg.setVerifyHelpProp = value;
    });
    try {
        Object.defineProperties(arg, wrapTestObject({ '0': wrapTestObject({ set: set_func }) }));
        return false;
    } catch (e) {
        var desc = Object.getOwnPropertyDescriptor(arg, '0');
        return e instanceof TypeError && desc.get === get_func && typeof desc.set === 'undefined' && desc.enumerable === false && desc.configurable === false;
    }
});
runTestCase(testcase);