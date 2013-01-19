wrapTestObject(function testcase() {
    var arr = wrapTestObject([12]);
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ enumerable: false }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', 12, true, false, true);
    } catch (ex) {
        return false;
    }
});
runTestCase(testcase);