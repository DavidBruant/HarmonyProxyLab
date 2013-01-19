var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperty(arr, '0', wrapTestObject({
            set: set_fun,
            enumerable: true,
            configurable: true
        }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ enumerable: false }) }));
            return accessorPropertyAttributesAreCorrect(arr, '0', undefined, set_fun, 'setVerifyHelpProp', false, true);
        } catch (ex) {
            return false;
        }
    });
runTestCase(testcase);