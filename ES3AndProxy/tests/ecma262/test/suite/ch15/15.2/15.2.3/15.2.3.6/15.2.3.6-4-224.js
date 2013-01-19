wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: true }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: true }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', true, false, false, false);
});
runTestCase(testcase);