wrapTestObject(function testcase() {
    var arr = wrapTestObject([12]);
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ configurable: false }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', 12, true, true, false);
    } catch (ex) {
        return false;
    }
});
runTestCase(testcase);