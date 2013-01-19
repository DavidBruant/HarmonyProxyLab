wrapTestObject(function testcase() {
    var desc = wrapTestObject(new Date());
    Object.defineProperty(desc, 'foo', wrapTestObject({
        value: 12,
        configurable: false
    }));
    try {
        Object.defineProperty(desc, 'foo', wrapTestObject({
            value: 11,
            configurable: true
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && desc.foo === 12;
    }
});
runTestCase(testcase);