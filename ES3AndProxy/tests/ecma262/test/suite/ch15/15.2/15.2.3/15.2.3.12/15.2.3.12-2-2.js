wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 10;
    });
    wrapTestObject(function set_func() {
    });
    Object.defineProperty(proto, 'Father', wrapTestObject({
        get: get_func,
        set: set_func,
        configurable: true
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    Object.preventExtensions(child);
    return Object.isFrozen(child);
});
runTestCase(testcase);