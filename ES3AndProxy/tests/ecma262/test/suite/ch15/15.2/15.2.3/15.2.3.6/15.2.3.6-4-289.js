var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            delete arguments[0];
            Object.defineProperty(arguments, '0', wrapTestObject({
                value: 10,
                writable: true,
                enumerable: true,
                configurable: true
            }));
            return dataPropertyAttributesAreCorrect(arguments, '0', 10, true, true, true);
        })(0, 1, 2);
    });
runTestCase(testcase);