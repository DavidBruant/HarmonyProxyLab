wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '1', wrapTestObject({
        value: 3,
        configurable: false,
        enumerable: false
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({
            '1': wrapTestObject({
                value: 13,
                enumerable: true
            })
        }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '1', 3, false, false, false);
    }
});
runTestCase(testcase);