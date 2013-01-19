var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var d1 = wrapTestObject({
                value: 101,
                configurable: false
            });
        Object.defineProperty(o, 'foo', d1);
        var desc = wrapTestObject({
                value: 101,
                configurable: true
            });
        try {
            Object.defineProperty(o, 'foo', desc);
        } catch (e) {
            if (e instanceof TypeError) {
                var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
                if (d2.value === 101 && d2.configurable === false) {
                    return true;
                }
            }
        }
    });
runTestCase(testcase);