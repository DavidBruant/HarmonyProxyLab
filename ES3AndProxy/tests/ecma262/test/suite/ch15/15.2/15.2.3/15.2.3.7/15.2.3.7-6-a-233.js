wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '1', wrapTestObject({
        configurable: false,
        writable: false
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ writable: true }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '1', undefined, false, false, false);
    }
});
runTestCase(testcase);