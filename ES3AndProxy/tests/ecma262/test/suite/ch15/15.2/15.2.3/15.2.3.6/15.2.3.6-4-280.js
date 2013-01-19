wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj.property = 12;
    Object.defineProperty(arrObj, 'property', wrapTestObject({
        writable: false,
        enumerable: false,
        configurable: false
    }));
    return dataPropertyAttributesAreCorrect(arrObj, 'property', 12, false, false, false);
});
runTestCase(testcase);