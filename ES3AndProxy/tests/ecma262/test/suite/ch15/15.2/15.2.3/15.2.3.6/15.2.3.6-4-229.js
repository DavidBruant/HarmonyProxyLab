wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({
        writable: false,
        configurable: true
    }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ writable: true }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, true, false, true);
});
runTestCase(testcase);