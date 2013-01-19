var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
            var setFunc = wrapTestObject(function setFunc(value) {
                    this.genericPropertyString = value;
                });
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                set: setFunc,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, 'genericProperty', wrapTestObject({ configurable: true }));
            } catch (e) {
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', undefined, setFunc, 'genericPropertyString', false, false, false);
            }
            return false;
        })(1, 2, 3);
    });
runTestCase(testcase);