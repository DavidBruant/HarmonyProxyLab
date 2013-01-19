wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '1', wrapTestObject({
        value: 3,
        writable: true,
        configurable: false
    }));
    try {
        Object.defineProperty(arrObj, '1', wrapTestObject({
            value: 13,
            writable: true,
            configurable: true
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, '1', 3, true, false, false);
    }
});
runTestCase(testcase);