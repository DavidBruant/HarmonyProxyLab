wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj[0] = 100;
    Object.defineProperty(arrObj, '0', wrapTestObject({
        value: 100,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    return dataPropertyAttributesAreCorrect(arrObj, '0', 100, true, true, true);
});
runTestCase(testcase);