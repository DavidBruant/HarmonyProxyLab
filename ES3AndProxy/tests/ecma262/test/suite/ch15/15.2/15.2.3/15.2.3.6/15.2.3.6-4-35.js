var testcase = wrapTestObject(function testcase() {
        var str = wrapTestObject(new String('abc'));
        Object.defineProperty(str, 'foo', wrapTestObject({
            value: 12,
            configurable: false
        }));
        try {
            Object.defineProperty(str, 'foo', wrapTestObject({
                value: 11,
                configurable: true
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && str.foo === 12;
        }
    });
runTestCase(testcase);