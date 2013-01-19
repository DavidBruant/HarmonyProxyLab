var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var get_Func = wrapTestObject(function get_Func() {
                return 10;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: get_Func,
            configurable: false
        }));
        try {
            Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 11 }) }));
            return false;
        } catch (e) {
            var verifyEnumerable = false;
            for (var p in obj) {
                if (p === 'foo') {
                    verifyEnumerable = true;
                }
            }
            var verifyValue = false;
            verifyValue = obj.foo === 10;
            var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
            var verifyConfigurable = false;
            delete obj.foo;
            verifyConfigurable = obj.hasOwnProperty('foo');
            return e instanceof TypeError && verifyConfigurable && !verifyEnumerable && verifyValue && typeof desc.set === 'undefined' && desc.get === get_Func;
        }
    });
runTestCase(testcase);