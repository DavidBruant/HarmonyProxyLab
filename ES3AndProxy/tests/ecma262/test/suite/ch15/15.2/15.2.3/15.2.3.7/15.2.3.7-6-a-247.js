wrapTestObject(function testcase() {
    var arr = wrapTestObject([12]);
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: 36 }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', 36, true, true, true);
    } catch (ex) {
        return false;
    }
});
runTestCase(testcase);