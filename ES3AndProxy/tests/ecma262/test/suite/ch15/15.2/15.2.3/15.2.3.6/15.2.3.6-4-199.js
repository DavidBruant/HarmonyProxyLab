wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ enumerable: true }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', undefined, false, true, false);
});
runTestCase(testcase);