wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({
        set: wrapTestObject(function () {
        }),
        configurable: false
    }));
    try {
        Object.defineProperties(obj, wrapTestObject({
            prop: wrapTestObject({
                get: wrapTestObject(function () {
                }),
                configurable: true
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);