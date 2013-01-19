var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var get_func = wrapTestObject(function get_func() {
                return 10;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: get_func,
            configurable: true
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 12 }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 12, false, false, true);
    });
runTestCase(testcase);