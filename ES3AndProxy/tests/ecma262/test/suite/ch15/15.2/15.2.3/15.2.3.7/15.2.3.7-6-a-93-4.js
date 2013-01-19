wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, '0', wrapTestObject({
        value: 1001,
        writable: false,
        configurable: false
    }));
    Object.defineProperty(obj, '1', wrapTestObject({
        value: 1003,
        writable: false,
        configurable: true
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({
            0: wrapTestObject({ value: 1002 }),
            1: wrapTestObject({ value: 1004 })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, '0', 1001, false, false, false) && dataPropertyAttributesAreCorrect(obj, '1', 1003, false, false, true);
    }
});
runTestCase(testcase);