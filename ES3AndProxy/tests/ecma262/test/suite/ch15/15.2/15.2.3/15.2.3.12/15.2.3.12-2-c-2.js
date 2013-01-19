var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        var set_func = wrapTestObject(function set_func() {
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: get_func,
            set: set_func,
            configurable: true
        }));
        Object.preventExtensions(obj);
        return !Object.isFrozen(obj);
    });
runTestCase(testcase);