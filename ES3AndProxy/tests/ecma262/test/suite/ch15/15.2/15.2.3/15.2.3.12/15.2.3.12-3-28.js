var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo1', wrapTestObject({
            value: 20,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        var set_func = wrapTestObject(function set_func() {
            });
        Object.defineProperty(obj, 'foo2', wrapTestObject({
            get: get_func,
            set: set_func,
            configurable: false
        }));
        Object.preventExtensions(obj);
        return Object.isFrozen(obj);
    });
runTestCase(testcase);