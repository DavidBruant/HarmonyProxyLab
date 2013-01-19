wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
        wrapTestObject(function getFunc1() {
            return 10;
        });
        Object.defineProperty(arguments, '0', wrapTestObject({
            get: getFunc1,
            enumerable: true,
            configurable: true
        }));
        wrapTestObject(function getFunc2() {
            return 20;
        });
        Object.defineProperty(arguments, '0', wrapTestObject({
            get: getFunc2,
            enumerable: false,
            configurable: false
        }));
        var verifyFormal = a === 0;
        return accessorPropertyAttributesAreCorrect(arguments, '0', getFunc2, undefined, undefined, false, false) && verifyFormal;
    })(0, 1, 2);
});
runTestCase(testcase);