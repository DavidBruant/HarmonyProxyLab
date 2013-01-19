var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            var setFunc = wrapTestObject(function setFunc(value) {
                    this.genericPropertyString = value;
                });
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                set: setFunc,
                enumerable: true,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, 'genericProperty', wrapTestObject({ enumerable: false }));
            } catch (e) {
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', undefined, setFunc, 'genericPropertyString', true, false);
            }
            return false;
        })(1, 2, 3);
    });
runTestCase(testcase);