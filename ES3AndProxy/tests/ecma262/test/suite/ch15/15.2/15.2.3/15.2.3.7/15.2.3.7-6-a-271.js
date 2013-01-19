wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, 'property', wrapTestObject({ writable: false }));
    try {
        Object.defineProperties(arr, wrapTestObject({ 'property': wrapTestObject({ writable: true }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, 'property', undefined, false, false, false);
    }
});
runTestCase(testcase);