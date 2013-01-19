wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    Object.defineProperty(obj, 'property', wrapTestObject({
        value: 1001,
        writable: false,
        configurable: true
    }));
    Object.defineProperty(obj, 'property', wrapTestObject({ value: 1002 }));
    return dataPropertyAttributesAreCorrect(obj, 'property', 1002, false, false, true);
});
runTestCase(testcase);