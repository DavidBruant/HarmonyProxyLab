var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
            Object.defineProperty(arguments, '0', wrapTestObject({
                value: 10,
                writable: false,
                enumerable: true,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, '0', wrapTestObject({ enumerable: false }));
            } catch (e) {
                var verifyFormal = a === 10;
                return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, '0', 10, false, true, false) && verifyFormal;
            }
            return false;
        })(0, 1, 2);
    });
runTestCase(testcase);