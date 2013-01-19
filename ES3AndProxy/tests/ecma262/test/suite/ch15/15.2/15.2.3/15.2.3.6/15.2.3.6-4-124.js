wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ writable: false }));
    return dataPropertyAttributesAreCorrect(arrObj, 'length', 0, false, false, false);
});
runTestCase(testcase);