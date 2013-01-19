wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'property', wrapTestObject({
        value: 12,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    return dataPropertyAttributesAreCorrect(arrObj, 'property', 12, true, true, true);
});
runTestCase(testcase);