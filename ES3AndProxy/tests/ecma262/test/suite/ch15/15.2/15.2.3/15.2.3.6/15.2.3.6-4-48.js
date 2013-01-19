wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({
        value: 1001,
        enumerable: true,
        configurable: false
    }));
    return dataPropertyAttributesAreCorrect(obj, 'property', 1001, false, true, false);
});
runTestCase(testcase);