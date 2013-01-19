wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'Father', wrapTestObject({
        value: 10,
        writable: false,
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