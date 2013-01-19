wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
        }),
        configurable: true
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var obj = wrapTestObject(new ConstructFun());
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 11,
        configurable: false
    }));
    try {
        Object.defineProperty(obj, 'foo', wrapTestObject({ configurable: true }));
        return false;
    } catch (e) {
        return e instanceof TypeError && obj.foo === 11;
    }
});
runTestCase(testcase);