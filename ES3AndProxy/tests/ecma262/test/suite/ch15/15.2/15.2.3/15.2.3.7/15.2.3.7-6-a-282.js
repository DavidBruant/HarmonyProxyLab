var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun(a, b, c) {
            arg = arguments;
        })(0, 1, 2);
        Object.defineProperty(arg, '0', wrapTestObject({
            value: 0,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperties(arg, wrapTestObject({ '0': wrapTestObject({ value: 10 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arg, '0', 0, false, true, false);
        }
    });
runTestCase(testcase);