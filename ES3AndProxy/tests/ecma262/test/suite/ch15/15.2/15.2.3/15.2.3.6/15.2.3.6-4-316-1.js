var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            }));
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                value: 1002,
                enumerable: false,
                configurable: false
            }));
            return dataPropertyAttributesAreCorrect(arguments, 'genericProperty', 1002, true, false, false);
        })(1, 2, 3);
    });
runTestCase(testcase);