wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        wrapTestObject(function getFunc() {
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
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, undefined, undefined, true, false);
        }
        return false;
    })();
});
runTestCase(testcase);