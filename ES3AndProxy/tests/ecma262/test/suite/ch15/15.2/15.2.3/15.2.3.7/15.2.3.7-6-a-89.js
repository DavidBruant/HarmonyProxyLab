wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_Func() {
        return 0;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: get_Func,
        set: undefined,
        enumerable: false,
        configurable: false
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: undefined }) }));
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
    return verifyConfigurable && !verifyEnumerable && typeof desc.set === 'undefined';
});
runTestCase(testcase);