wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    Object.defineProperty(obj, 'property', wrapTestObject({
        value: 1001,
        writable: true,
        configurable: false
    }));
    Object.defineProperty(obj, 'property', wrapTestObject({ value: 1002 }));
    return dataPropertyAttributesAreCorrect(obj, 'property', 1002, true, false, false);
});
runTestCase(testcase);