wrapTestObject(function testcase() {
    var fun = wrapTestObject(function () {
        });
    Object.defineProperty(fun, 'prop', wrapTestObject({
        value: 11,
        configurable: false
    }));
    try {
        Object.defineProperties(fun, wrapTestObject({
            prop: wrapTestObject({
                value: 12,
                configurable: true
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(fun, 'prop', 11, false, false, false);
    }
});
runTestCase(testcase);