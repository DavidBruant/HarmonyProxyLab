var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            }));
            return dataPropertyAttributesAreCorrect(arguments, 'genericProperty', 1001, true, true, true);
        })(1, 2, 3);
    });
runTestCase(testcase);