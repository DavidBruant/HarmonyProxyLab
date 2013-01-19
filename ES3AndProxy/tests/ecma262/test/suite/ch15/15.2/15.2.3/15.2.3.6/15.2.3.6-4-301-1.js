var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
            delete arguments[0];
            Object.defineProperty(arguments, '0', wrapTestObject({
                value: 10,
                writable: false,
                enumerable: false,
                configurable: false
            }));
            var verifyFormal = a === 0;
            return dataPropertyAttributesAreCorrect(arguments, '0', 10, false, false, false) && verifyFormal;
        })(0, 1, 2);
    });
runTestCase(testcase);