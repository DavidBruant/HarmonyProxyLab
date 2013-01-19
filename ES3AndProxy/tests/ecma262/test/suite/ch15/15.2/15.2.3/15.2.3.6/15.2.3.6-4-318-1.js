var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                writable: false,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, 'genericProperty', wrapTestObject({ writable: true }));
            } catch (e) {
                return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, 'genericProperty', undefined, false, false, false);
            }
            return false;
        })(1, 2, 3);
    });
runTestCase(testcase);