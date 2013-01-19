wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        Object.defineProperty(arguments, '0', wrapTestObject({
            value: 0,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(arguments, '0', wrapTestObject({ value: 10 }));
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, '0', 0, false, false, false);
        }
        return false;
    })();
});
runTestCase(testcase);