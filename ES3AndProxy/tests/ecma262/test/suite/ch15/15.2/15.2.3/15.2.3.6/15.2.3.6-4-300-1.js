var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
            var getFunc = wrapTestObject(function getFunc() {
                    return 0;
                });
            Object.defineProperty(arguments, '0', wrapTestObject({
                get: getFunc,
                enumerable: true,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, '0', wrapTestObject({ configurable: true }));
            } catch (e) {
                var verifyFormal = a === 0;
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, undefined, undefined, true, false) && verifyFormal;
            }
            return false;
        })(0, 1, 2);
    });
runTestCase(testcase);