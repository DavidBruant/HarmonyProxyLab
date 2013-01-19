wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    proto.foo = 0;
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    Object.defineProperty(child, 'foo', wrapTestObject({
        get: wrapTestObject(function () {
            return 10;
        }),
        configurable: true
    }));
    Object.freeze(child);
    var desc = Object.getOwnPropertyDescriptor(child, 'foo');
    delete child.foo;
    return child.foo === 10 && desc.configurable === false;
});
runTestCase(testcase);