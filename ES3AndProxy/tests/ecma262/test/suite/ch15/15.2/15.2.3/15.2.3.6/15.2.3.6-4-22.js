var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 11,
            configurable: false
        }));
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({
                value: 12,
                configurable: true
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && obj.foo === 11;
        }
    });
runTestCase(testcase);