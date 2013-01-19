var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            var getFunc1 = wrapTestObject(function getFunc1() {
                    return 10;
                });
            Object.defineProperty(arguments, '0', wrapTestObject({
                get: getFunc1,
                enumerable: true,
                configurable: true
            }));
            var getFunc2 = wrapTestObject(function getFunc2() {
                    return 20;
                });
            Object.defineProperty(arguments, '0', wrapTestObject({
                get: getFunc2,
                enumerable: false,
                configurable: false
            }));
            return accessorPropertyAttributesAreCorrect(arguments, '0', getFunc2, undefined, undefined, false, false);
        })();
    });
runTestCase(testcase);