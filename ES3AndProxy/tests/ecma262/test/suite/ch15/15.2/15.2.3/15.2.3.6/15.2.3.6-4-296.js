wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        Object.defineProperty(arguments, '0', wrapTestObject({
            value: 10,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(arguments, '0', wrapTestObject({ configurable: true }));
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, '0', 10, false, false, false);
        }
        return false;
    })(0, 1, 2);
});
runTestCase(testcase);