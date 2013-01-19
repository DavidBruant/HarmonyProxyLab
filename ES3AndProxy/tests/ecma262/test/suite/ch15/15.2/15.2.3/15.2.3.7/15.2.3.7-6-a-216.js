wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({ value: 'abcd' }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: 'abcd' }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', 'abcd', false, false, false);
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);