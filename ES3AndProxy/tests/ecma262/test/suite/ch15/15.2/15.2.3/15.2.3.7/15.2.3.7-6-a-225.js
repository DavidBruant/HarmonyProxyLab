wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({ configurable: true }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ configurable: true }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', undefined, false, false, true);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);