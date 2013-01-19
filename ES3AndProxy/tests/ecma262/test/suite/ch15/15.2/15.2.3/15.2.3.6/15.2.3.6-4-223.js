wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 0, wrapTestObject({
        value: 'abcd',
        writable: false,
        configurable: false
    }));
    try {
        Object.defineProperty(arrObj, '0', wrapTestObject({ value: 'fghj' }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '0', 'abcd', false, false, false);
    }
});
runTestCase(testcase);