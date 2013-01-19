wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({
        value: 1001,
        writable: true,
        enumerable: true
    }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', 1001, true, true, false);
});
runTestCase(testcase);