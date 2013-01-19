wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        delete arguments[0];
        Object.defineProperty(arguments, '0', wrapTestObject({
            value: 10,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        return dataPropertyAttributesAreCorrect(arguments, '0', 10, false, false, false);
    })(0, 1, 2);
});
runTestCase(testcase);