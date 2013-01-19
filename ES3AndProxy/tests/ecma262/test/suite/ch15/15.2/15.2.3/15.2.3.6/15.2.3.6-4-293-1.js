var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            Object.defineProperty(arguments, '0', wrapTestObject({
                value: 10,
                writable: false
            }));
            Object.defineProperty(arguments, '0', wrapTestObject({ value: 20 }));
            return dataPropertyAttributesAreCorrect(arguments, '0', 20, false, true, true);
        })(0, 1, 2);
    });
runTestCase(testcase);