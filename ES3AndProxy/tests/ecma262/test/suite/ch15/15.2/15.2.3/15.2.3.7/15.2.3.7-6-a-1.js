wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
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
        return e instanceof TypeError;
    }
});
runTestCase(testcase);