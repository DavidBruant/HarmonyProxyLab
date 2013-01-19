wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: 101 }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: 101 }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', 101, false, false, false);
});
runTestCase(testcase);