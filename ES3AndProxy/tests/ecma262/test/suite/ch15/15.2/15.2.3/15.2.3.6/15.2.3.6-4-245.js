wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '1', wrapTestObject({
        value: 3,
        writable: false,
        configurable: false
    }));
    try {
        Object.defineProperty(arrObj, '1', wrapTestObject({ value: 'abc' }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '1', 3, false, false, false);
    }
});
runTestCase(testcase);