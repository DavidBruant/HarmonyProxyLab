wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({
        enumerable: false,
        configurable: true
    }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ enumerable: true }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, false, true, true);
});
runTestCase(testcase);