wrapTestObject(function testcase() {
    var arg;
    wrapTestObject(function fun(a, b, c) {
        arg = arguments;
    })(0, 1, 2);
    wrapTestObject(function get_func1() {
        return 10;
    });
    Object.defineProperty(arg, '0', wrapTestObject({
        get: get_func1,
        enumerable: true,
        configurable: true
    }));
    wrapTestObject(function get_func2() {
        return 20;
    });
    Object.defineProperties(arg, wrapTestObject({
        '0': wrapTestObject({
            get: get_func2,
            enumerable: false,
            configurable: false
        })
    }));
    var desc = Object.getOwnPropertyDescriptor(arg, '0');
    return desc.get === get_func2 && typeof desc.set === 'undefined' && desc.configurable === false && desc.enumerable === false;
});
runTestCase(testcase);