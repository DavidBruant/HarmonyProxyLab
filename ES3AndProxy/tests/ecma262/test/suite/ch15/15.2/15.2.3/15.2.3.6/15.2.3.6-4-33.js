wrapTestObject(function testcase() {
    var fun = wrapTestObject(function () {
        });
    Object.defineProperty(fun, 'foo', wrapTestObject({
        value: 12,
        configurable: false
    }));
    try {
        Object.defineProperty(fun, 'foo', wrapTestObject({
            value: 11,
            configurable: true
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && fun.foo === 12;
    }
});
runTestCase(testcase);