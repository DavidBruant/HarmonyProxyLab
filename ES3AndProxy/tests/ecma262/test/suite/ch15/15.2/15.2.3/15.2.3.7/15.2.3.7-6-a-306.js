var testcase = wrapTestObject(function testcase() {
        var arg = wrapTestObject(function () {
                return arguments;
            })(1, 2, 3);
        Object.defineProperty(arg, 'genericProperty', wrapTestObject({
            value: 1001,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperties(arg, wrapTestObject({ 'genericProperty': wrapTestObject({ value: 1002 }) }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arg, 'genericProperty', 1001, false, false, false);
        }
    });
runTestCase(testcase);