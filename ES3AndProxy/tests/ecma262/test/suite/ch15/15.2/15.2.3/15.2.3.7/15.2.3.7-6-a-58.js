var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var get_Func1 = wrapTestObject(function get_Func1() {
                return 10;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: get_Func1,
            configurable: true
        }));
        var get_Func2 = wrapTestObject(function get_Func2() {
                return 20;
            });
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: get_Func2 }) }));
        var verifyEnumerable = false;
        for (var p in obj) {
            if (p === 'foo') {
                verifyEnumerable = true;
            }
        }
        var verifyValue = false;
        verifyValue = obj.foo === 20;
        var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
        var verifyConfigurable = false;
        delete obj.foo;
        verifyConfigurable = obj.hasOwnProperty('foo');
        return !verifyConfigurable && !verifyEnumerable && verifyValue && typeof desc.set === 'undefined' && desc.get === get_Func2;
    });
runTestCase(testcase);