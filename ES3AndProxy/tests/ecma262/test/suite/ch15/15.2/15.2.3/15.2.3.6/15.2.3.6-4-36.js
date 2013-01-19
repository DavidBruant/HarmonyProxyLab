wrapTestObject(function testcase() {
    var obj = wrapTestObject(new Boolean(true));
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 12,
        configurable: false
    }));
    try {
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 11,
            configurable: true
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && obj.foo === 12;
    }
});
runTestCase(testcase);