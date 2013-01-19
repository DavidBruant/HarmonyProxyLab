wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    wrapTestObject(function get_fun() {
        return 37;
    });
    wrapTestObject(function set_fun(value) {
        arr.verifySetFun = value;
    });
    Object.defineProperty(arr, 'property', wrapTestObject({
        get: get_fun,
        set: set_fun
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({
            'property': wrapTestObject({
                get: wrapTestObject(function () {
                    return 36;
                })
            })
        }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arr, 'property', get_fun, set_fun, 'verifySetFun', false, false);
    }
});
runTestCase(testcase);