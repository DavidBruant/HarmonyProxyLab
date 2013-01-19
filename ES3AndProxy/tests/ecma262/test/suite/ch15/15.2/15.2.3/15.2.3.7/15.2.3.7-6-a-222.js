var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var set_func = wrapTestObject(function set_func(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperty(arr, '0', wrapTestObject({ set: set_func }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ set: set_func }) }));
            return accessorPropertyAttributesAreCorrect(arr, '0', undefined, set_func, 'setVerifyHelpProp', false, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);