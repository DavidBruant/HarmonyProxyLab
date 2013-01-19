wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function getFunc() {
        return 3;
    });
    Object.defineProperty(arrObj, '1', wrapTestObject({
        get: getFunc,
        configurable: true
    }));
    Object.defineProperty(arrObj, '1', wrapTestObject({ value: 12 }));
    return dataPropertyAttributesAreCorrect(arrObj, '1', 12, false, false, true);
});
runTestCase(testcase);