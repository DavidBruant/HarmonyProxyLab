var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperty(arr, '0', wrapTestObject({
            set: set_fun,
            configurable: true
        }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ configurable: false }) }));
            return accessorPropertyAttributesAreCorrect(arr, '0', undefined, set_fun, 'setVerifyHelpProp', false, false);
        } catch (ex) {
            return false;
        }
    });
runTestCase(testcase);