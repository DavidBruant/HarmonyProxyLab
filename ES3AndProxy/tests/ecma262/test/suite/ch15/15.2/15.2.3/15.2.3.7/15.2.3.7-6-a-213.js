wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({ value: -0 }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: +0 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '0', -0, false, false, false);
    }
});
runTestCase(testcase);