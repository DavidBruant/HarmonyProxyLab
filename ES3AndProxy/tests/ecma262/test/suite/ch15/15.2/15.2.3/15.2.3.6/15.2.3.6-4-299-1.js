wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
        wrapTestObject(function getFunc() {
            return 10;
        });
        Object.defineProperty(arguments, '0', wrapTestObject({
            get: getFunc,
            enumerable: true,
            configurable: false
        }));
        try {
            Object.defineProperty(arguments, '0', wrapTestObject({ enumerable: false }));
        } catch (e) {
            var verifyFormal = a === 0;
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, undefined, undefined, true, false) && verifyFormal;
        }
        return false;
    })(0, 1, 2);
});
runTestCase(testcase);