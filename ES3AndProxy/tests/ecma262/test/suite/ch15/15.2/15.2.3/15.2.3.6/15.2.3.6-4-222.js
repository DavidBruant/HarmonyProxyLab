wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: 'abcd' }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: 'abcd' }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', 'abcd', false, false, false);
});
runTestCase(testcase);