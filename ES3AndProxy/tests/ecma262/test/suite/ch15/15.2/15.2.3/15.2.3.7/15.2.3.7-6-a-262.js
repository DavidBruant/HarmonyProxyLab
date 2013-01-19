var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var get_fun = wrapTestObject(function get_fun() {
                return 36;
            });
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperty(arr, '0', wrapTestObject({
            get: wrapTestObject(function () {
                return 12;
            }),
            set: set_fun,
            enumerable: true,
            configurable: true
        }));
        try {
            Object.defineProperties(arr, wrapTestObject({
                '0': wrapTestObject({
                    get: get_fun,
                    enumerable: false,
                    configurable: false
                })
            }));
            return accessorPropertyAttributesAreCorrect(arr, '0', get_fun, set_fun, 'setVerifyHelpProp', false, false);
        } catch (ex) {
            return false;
        }
    });
runTestCase(testcase);