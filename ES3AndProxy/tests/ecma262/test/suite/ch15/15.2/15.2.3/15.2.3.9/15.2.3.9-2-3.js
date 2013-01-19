wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'Father', wrapTestObject({
        get: wrapTestObject(function () {
            return 10;
        }),
        configurable: true
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    Object.freeze(child);
    var beforeDeleted = proto.hasOwnProperty('Father');
    delete proto.Father;
    var afterDeleted = proto.hasOwnProperty('Father');
    return beforeDeleted && !afterDeleted;
});
runTestCase(testcase);