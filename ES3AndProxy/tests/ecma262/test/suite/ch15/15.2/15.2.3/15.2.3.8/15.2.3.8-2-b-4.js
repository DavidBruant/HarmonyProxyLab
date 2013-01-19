var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.variableForHelpVerify = 'data';
        Object.defineProperty(obj, 'foo1', wrapTestObject({
            value: 10,
            writable: true,
            enumerable: true,
            configurable: false
        }));
        var set_func = wrapTestObject(function set_func(value) {
                obj.variableForHelpVerify = value;
            });
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        Object.defineProperty(obj, 'foo2', wrapTestObject({
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: false
        }));
        var preCheck = Object.isExtensible(obj);
        Object.seal(obj);
        return preCheck && dataPropertyAttributesAreCorrect(obj, 'foo1', 10, true, true, false) && accessorPropertyAttributesAreCorrect(obj, 'foo2', get_func, set_func, 'variableForHelpVerify', true, false);
    });
runTestCase(testcase);