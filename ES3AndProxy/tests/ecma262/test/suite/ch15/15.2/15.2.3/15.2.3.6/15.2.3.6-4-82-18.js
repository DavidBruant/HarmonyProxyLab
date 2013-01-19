wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, '0', wrapTestObject({
        value: 1001,
        writable: true,
        enumerable: false,
        configurable: true
    }));
    Object.defineProperty(obj, '0', wrapTestObject({ enumerable: true }));
    return dataPropertyAttributesAreCorrect(obj, '0', 1001, true, true, true);
});
runTestCase(testcase);