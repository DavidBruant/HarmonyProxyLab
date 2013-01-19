wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
        wrapTestObject(function getFunc1() {
            return 10;
        });
        Object.defineProperty(arguments, '0', wrapTestObject({
            get: getFunc1,
            enumerable: false,
            configurable: false
        }));
        wrapTestObject(function getFunc2() {
            return 20;
        });
        try {
            Object.defineProperty(arguments, '0', wrapTestObject({ get: getFunc2 }));
        } catch (e) {
            var verifyFormal = a === 0;
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, '0', getFunc1, undefined, undefined, false, false) && verifyFormal;
        }
        return false;
    })(0, 1, 2);
});
runTestCase(testcase);