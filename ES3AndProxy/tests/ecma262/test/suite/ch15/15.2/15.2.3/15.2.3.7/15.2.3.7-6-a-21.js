wrapTestObject(function testcase() {
    var obj = wrapTestObject(new Error());
    Object.defineProperty(obj, 'prop', wrapTestObject({
        value: 11,
        configurable: false
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({
            prop: wrapTestObject({
                value: 12,
                configurable: true
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'prop', 11, false, false, false);
    }
});
runTestCase(testcase);