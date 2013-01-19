var testcase = wrapTestObject(function testcase() {
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(argObj, 'foo', wrapTestObject({
            value: 12,
            configurable: false
        }));
        try {
            Object.defineProperty(argObj, 'foo', wrapTestObject({
                value: 11,
                configurable: true
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && argObj.foo === 12;
        }
    });
runTestCase(testcase);