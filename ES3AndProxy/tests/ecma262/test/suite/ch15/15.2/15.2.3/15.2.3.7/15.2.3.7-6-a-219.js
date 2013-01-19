wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({ writable: true }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ writable: true }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', undefined, true, false, false);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);