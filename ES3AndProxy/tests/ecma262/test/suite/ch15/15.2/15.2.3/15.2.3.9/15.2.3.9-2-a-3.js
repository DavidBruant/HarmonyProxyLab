wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 0;
        }),
        configurable: true
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    Object.defineProperty(child, 'foo', wrapTestObject({
        value: 10,
        configurable: true
    }));
    Object.freeze(child);
    var desc = Object.getOwnPropertyDescriptor(child, 'foo');
    delete child.foo;
    return child.foo === 10 && desc.configurable === false && desc.writable === false;
});
runTestCase(testcase);