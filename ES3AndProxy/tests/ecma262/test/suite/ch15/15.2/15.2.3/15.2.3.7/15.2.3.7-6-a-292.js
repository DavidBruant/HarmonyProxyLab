var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun() {
            arg = arguments;
        })(0, 1, 2);
        var get_func1 = wrapTestObject(function get_func1() {
                return 10;
            });
        Object.defineProperty(arg, '0', wrapTestObject({
            get: get_func1,
            enumerable: true,
            configurable: true
        }));
        var get_func2 = wrapTestObject(function get_func2() {
                return 20;
            });
        Object.defineProperties(arg, wrapTestObject({
            '0': wrapTestObject({
                get: get_func2,
                enumerable: false,
                configurable: false
            })
        }));
        return accessorPropertyAttributesAreCorrect(arg, '0', get_func2, undefined, undefined, false, false);
    });
runTestCase(testcase);