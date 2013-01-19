wrapTestObject(function testcase() {
    var str = wrapTestObject(new String());
    Object.defineProperty(str, 'prop', wrapTestObject({
        value: 11,
        configurable: false
    }));
    try {
        Object.defineProperties(str, wrapTestObject({
            prop: wrapTestObject({
                value: 12,
                configurable: true
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(str, 'prop', 11, false, false, false);
    }
});
runTestCase(testcase);