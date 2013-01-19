var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var get_Func = wrapTestObject(function get_Func() {
                return 0;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: undefined,
            get: get_Func,
            enumerable: false,
            configurable: false
        }));
        var set_Func = wrapTestObject(function set_Func() {
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