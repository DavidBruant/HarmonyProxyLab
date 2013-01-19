wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        Object.defineProperty(arguments, '0', wrapTestObject({
            value: 20,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        return dataPropertyAttributesAreCorrect(arguments, '0', 20, false, false, false);
    })(0, 1, 2);
});
runTestCase(testcase);