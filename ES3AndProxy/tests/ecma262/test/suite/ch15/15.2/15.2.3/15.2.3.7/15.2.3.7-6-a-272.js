wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, 'property', wrapTestObject({
        value: 12,
        enumerable: false
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({ 'property': wrapTestObject({ enumerable: true }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, 'property', 12, false, false, false);
    }
});
runTestCase(testcase);