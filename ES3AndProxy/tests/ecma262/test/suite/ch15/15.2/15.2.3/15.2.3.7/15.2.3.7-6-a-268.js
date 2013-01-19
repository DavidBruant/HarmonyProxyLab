var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var get_fun = wrapTestObject(function get_fun() {
                return 12;
            });
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.verifySetFun = value;
            });
        Object.defineProperty(arr, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 36;
            }),
            enumerable: true,
            configurable: true
        }));
        Object.defineProperties(arr, wrapTestObject({
            'property': wrapTestObject({
                get: get_fun,
                set: set_fun,
                enumerable: false
            })
        }));
        return accessorPropertyAttributesAreCorrect(arr, 'property', get_fun, set_fun, 'verifySetFun', false, true);
    });
runTestCase(testcase);