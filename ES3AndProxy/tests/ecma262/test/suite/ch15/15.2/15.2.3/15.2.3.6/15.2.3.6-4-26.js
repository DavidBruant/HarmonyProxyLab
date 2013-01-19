wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: wrapTestObject(function () {
            return 11;
        }),
        configurable: false
    }));
    try {
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 12;
            }),
            configurable: true
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && obj.property === 11;
    }
});
runTestCase(testcase);