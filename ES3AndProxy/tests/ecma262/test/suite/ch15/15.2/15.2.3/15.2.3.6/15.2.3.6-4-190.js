wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 0, wrapTestObject({
        value: 'ownDataProperty',
        configurable: false
    }));
    try {
        Object.defineProperty(arrObj, 0, wrapTestObject({ configurable: true }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '0', 'ownDataProperty', false, false, false);
    }
});
runTestCase(testcase);