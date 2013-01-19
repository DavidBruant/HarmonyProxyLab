wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, 'prop', wrapTestObject({
        value: 11,
        configurable: false
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({
            prop: wrapTestObject({
                value: 12,
                configurable: true
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arr, 'prop', 11, false, false, false);
    }
});
runTestCase(testcase);