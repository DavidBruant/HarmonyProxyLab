wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 9;
        }),
        configurable: false
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    Object.defineProperty(child, 'foo', wrapTestObject({
        set: wrapTestObject(function () {
        }),
        configurable: true
    }));
    Object.preventExtensions(child);
    return !Object.isFrozen(child);
});
runTestCase(testcase);