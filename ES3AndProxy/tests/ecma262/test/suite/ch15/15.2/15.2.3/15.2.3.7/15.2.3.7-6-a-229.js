var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperty(arr, '1', wrapTestObject({
            set: set_fun,
            configurable: false
        }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: 13 }) }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arr, '1', undefined, set_fun, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);