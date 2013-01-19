wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({ value: 101 }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: 101 }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', 101, false, false, false);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);