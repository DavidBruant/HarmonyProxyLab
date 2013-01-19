wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({
        value: 1001,
        writable: false,
        configurable: false
    }));
    Object.defineProperty(obj, 'property1', wrapTestObject({
        value: 1003,
        writable: false,
        configurable: true
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({
            property: wrapTestObject({ value: 1002 }),
            property1: wrapTestObject({ value: 1004 })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'property', 1001, false, false, false) && dataPropertyAttributesAreCorrect(obj, 'property1', 1003, false, false, true);
    }
});
runTestCase(testcase);