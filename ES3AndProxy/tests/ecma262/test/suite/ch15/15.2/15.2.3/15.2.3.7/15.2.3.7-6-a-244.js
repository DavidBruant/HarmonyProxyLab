var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var get_fun = wrapTestObject(function get_fun() {
                return 36;
            });
        Object.defineProperty(arr, '1', wrapTestObject({ get: get_fun }));
        try {
            Object.defineProperties(arr, wrapTestObject({
                '1': wrapTestObject({
                    get: wrapTestObject(function () {
                        return 12;
                    })
                })
            }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arr, '1', get_fun, undefined, undefined, false, false);
        }
    });
runTestCase(testcase);