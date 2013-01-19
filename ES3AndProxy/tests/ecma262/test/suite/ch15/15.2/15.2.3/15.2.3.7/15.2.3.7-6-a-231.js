var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        arr[1] = 3;
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ set: set_fun }) }));
        return accessorPropertyAttributesAreCorrect(arr, '1', undefined, set_fun, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);