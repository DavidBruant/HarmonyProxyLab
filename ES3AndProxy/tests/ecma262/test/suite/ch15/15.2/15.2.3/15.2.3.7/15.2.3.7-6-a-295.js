var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun() {
            arg = arguments;
        })();
        Object.defineProperty(arg, '0', wrapTestObject({
            value: 0,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        try {
            Object.defineProperties(arg, wrapTestObject({ '0': wrapTestObject({ writable: true }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arg, '0', 0, false, false, false);
        }
    });
runTestCase(testcase);