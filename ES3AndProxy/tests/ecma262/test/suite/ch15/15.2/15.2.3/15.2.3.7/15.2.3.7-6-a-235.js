wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '1', wrapTestObject({ value: +0 }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: -0 }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '1', +0, false, false, false);
    }
});
runTestCase(testcase);