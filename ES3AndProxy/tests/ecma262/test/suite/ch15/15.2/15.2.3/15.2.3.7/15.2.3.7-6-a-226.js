wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({ configurable: true }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ configurable: false }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', undefined, false, false, false);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);