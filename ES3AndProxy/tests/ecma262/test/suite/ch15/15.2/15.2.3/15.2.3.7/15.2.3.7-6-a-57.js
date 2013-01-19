wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_Func() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ get: get_Func }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_Func }) }));
    var verifyEnumerable = false;
    for (var p in obj) {
        if (p === 'foo') {
            verifyEnumerable = true;
        }
    }
    var verifyValue = false;
    verifyValue = obj.foo === 10;
    var verifyConfigurable = false;
    delete obj.foo;
    verifyConfigurable = obj.hasOwnProperty('foo');
    var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
    return verifyConfigurable && !verifyEnumerable && verifyValue && typeof desc.set === 'undefined' && desc.get === get_Func;
});
runTestCase(testcase);