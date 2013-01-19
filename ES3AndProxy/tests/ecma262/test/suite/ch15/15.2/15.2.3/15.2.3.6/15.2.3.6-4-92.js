wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: false,
        writable: false,
        configurable: false
    }));
    try {
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: false }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', false, false, false, false);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);