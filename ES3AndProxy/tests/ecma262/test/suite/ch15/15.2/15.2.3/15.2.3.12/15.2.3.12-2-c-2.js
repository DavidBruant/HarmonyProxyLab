wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 10;
    });
    wrapTestObject(function set_func() {
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