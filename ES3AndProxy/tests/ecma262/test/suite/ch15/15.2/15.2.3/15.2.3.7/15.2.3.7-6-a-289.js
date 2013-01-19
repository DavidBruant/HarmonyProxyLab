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
        enumerable: true,
        configurable: false
    }));
    try {
        Object.defineProperties(arg, wrapTestObject({ '0': wrapTestObject({ configurable: true }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arg, '0', get_func, undefined, undefined, true, false);
    }
});
runTestCase(testcase);