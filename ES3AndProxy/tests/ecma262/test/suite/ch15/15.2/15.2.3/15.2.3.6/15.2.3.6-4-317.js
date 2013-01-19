wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
            value: 1001,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({ value: 1002 }));
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, 'genericProperty', 1001, false, false, false);
        }
        return false;
    })(1, 2, 3);
});
runTestCase(testcase);