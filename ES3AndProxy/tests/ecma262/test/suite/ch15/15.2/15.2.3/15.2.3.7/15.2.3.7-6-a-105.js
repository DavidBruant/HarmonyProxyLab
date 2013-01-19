var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        var set_func = wrapTestObject(function set_func() {
                return 10;
            });
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ set: undefined }) }));
        var hasProperty = obj.hasOwnProperty('property');
        var verifyGet = false;
        verifyGet = obj.property === 10;
        var verifySet = false;
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        verifySet = typeof desc.set === 'undefined';
        var verifyEnumerable = false;
        for (var p in obj) {
            if (p === 'property') {
                verifyEnumerable = true;
            }
        }
        var verifyConfigurable = false;
        delete obj.property;
        verifyConfigurable = obj.hasOwnProperty('property');
        return hasProperty && verifyGet && verifySet && verifyEnumerable && !verifyConfigurable;
    });
runTestCase(testcase);