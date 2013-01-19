var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                enumerable: true,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, 'genericProperty', wrapTestObject({ enumerable: false }));
            } catch (e) {
                return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, 'genericProperty', undefined, false, true, false);
            }
            return false;
        })(1, 2, 3);
    });
runTestCase(testcase);