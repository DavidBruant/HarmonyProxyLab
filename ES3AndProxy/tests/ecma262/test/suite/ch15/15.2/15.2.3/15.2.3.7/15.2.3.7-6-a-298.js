wrapTestObject(function testcase() {
    var arg;
    wrapTestObject(function fun() {
        arg = arguments;
    })();
    wrapTestObject(function get_func1() {
        return 0;
    });
    Object.defineProperty(arg, '0', wrapTestObject({
        get: get_func1,
        enumerable: false,
        configurable: false
    }));
    wrapTestObject(function get_func2() {
        return 10;
    });
    try {
        Object.defineProperties(arg, wrapTestObject({ '0': wrapTestObject({ get: get_func2 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arg, '0', get_func1, undefined, undefined, false, false);
    }
});
runTestCase(testcase);