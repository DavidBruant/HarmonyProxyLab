wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([100]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: 200 }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', 200, true, true, true);
});
runTestCase(testcase);