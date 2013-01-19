wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({ value: true }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: true }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', true, false, false, false);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);