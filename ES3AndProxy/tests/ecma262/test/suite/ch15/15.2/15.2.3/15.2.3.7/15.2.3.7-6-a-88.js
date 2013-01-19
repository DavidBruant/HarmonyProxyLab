wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_Func() {
        return 0;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: undefined,
        get: get_Func,
        enumerable: false,
        configurable: false
    }));
    wrapTestObject(function set_Func() {
    });
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_Func }) }));
        return false;
    } catch (e) {
        var verifyEnumerable = false;
        for (var p in obj) {
            if (p === 'foo') {
                verifyEnumerable = true;
            }
        }
        var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
        var verifyConfigurable = false;
        delete obj.foo;
        verifyConfigurable = obj.hasOwnProperty('foo');
        return e instanceof TypeError && !verifyEnumerable && verifyConfigurable && typeof desc.set === 'undefined';
    }
});
runTestCase(testcase);