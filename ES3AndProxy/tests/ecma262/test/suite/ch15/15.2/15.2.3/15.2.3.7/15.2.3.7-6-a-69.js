var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 10,
            configurable: true
        }));
        var get_Func = wrapTestObject(function get_Func() {
                return 20;
            });
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_Func }) }));
        var verifyEnumerable = false;
        for (var p in obj) {
            if (p === 'foo') {
                verifyEnumerable = true;
            }
        }
        var verifyValue = false;
        verifyValue = obj.foo === 20;
        var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
        var verifyConfigurable = true;
        delete obj.foo;
        verifyConfigurable = obj.hasOwnProperty('foo');
        return !verifyConfigurable && !verifyEnumerable && verifyValue && typeof desc.set === 'undefined' && desc.get === get_Func;
    });
runTestCase(testcase);