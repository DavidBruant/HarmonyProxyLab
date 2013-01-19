var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        Object.defineProperty(arr, '0', wrapTestObject({ get: get_func }));
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ get: get_func }) }));
        return accessorPropertyAttributesAreCorrect(arr, '0', get_func, undefined, undefined, false, false);
    });
runTestCase(testcase);