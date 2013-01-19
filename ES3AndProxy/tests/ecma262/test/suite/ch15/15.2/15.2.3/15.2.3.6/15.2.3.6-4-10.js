var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var getter = wrapTestObject(function () {
                return 1;
            });
        var d1 = wrapTestObject({
                get: getter,
                enumerable: false,
                configurable: false
            });
        Object.defineProperty(o, 'foo', d1);
        var desc = wrapTestObject({
                get: getter,
                enumerable: true
            });
        try {
            Object.defineProperty(o, 'foo', desc);
        } catch (e) {
            if (e instanceof TypeError) {
                var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
                if (d2.get === getter && d2.enumerable === false && d2.configurable === false) {
                    return true;
                }
            }
        }
    });
runTestCase(testcase);