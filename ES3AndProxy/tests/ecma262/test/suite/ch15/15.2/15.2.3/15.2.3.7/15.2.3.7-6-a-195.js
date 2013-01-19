wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ enumerable: true }) }));
    return dataPropertyAttributesAreCorrect(arr, '0', undefined, false, true, false);
});
runTestCase(testcase);