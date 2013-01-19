wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([100]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ enumerable: false }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', 100, true, false, true);
});
runTestCase(testcase);