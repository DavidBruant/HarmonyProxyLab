wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })();
    Object.defineProperty(arg, 'prop', wrapTestObject({
        value: 11,
        configurable: false
    }));
    try {
        Object.defineProperties(arg, wrapTestObject({
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