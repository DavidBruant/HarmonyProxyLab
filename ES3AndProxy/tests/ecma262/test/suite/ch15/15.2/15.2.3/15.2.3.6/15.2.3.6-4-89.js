wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        writable: false,
        configurable: false
    }));
    try {
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: 20 }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, false, false);
    }
});
runTestCase(testcase);