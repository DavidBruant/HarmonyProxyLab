var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        var set_fun = wrapTestObject(function set_fun(value) {
                arr.setVerifyHelpProp = value;
            });
        Object.defineProperty(arr, 'property', wrapTestObject({ set: set_fun }));
        try {
            Object.defineProperties(arr, wrapTestObject({
                'property': wrapTestObject({
                    set: wrapTestObject(function () {
                    })
                })
            }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arr, 'property', undefined, set_fun, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);