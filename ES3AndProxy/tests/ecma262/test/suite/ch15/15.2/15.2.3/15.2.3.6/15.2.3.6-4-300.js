var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            var getFunc = wrapTestObject(function getFunc() {
                    return 10;
                });
            Object.defineProperty(arguments, '0', wrapTestObject({
                get: getFunc,
                enumerable: true,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, '0', wrapTestObject({ configurable: true }));
            } catch (e) {
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, undefined, undefined, true, false);
            }
            return false;
        })(0, 1, 2);
    });
runTestCase(testcase);