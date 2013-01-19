wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'Father', wrapTestObject({
        value: 10,
        configurable: true
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    var preCheck = Object.isExtensible(child);
    Object.seal(child);
    var beforeDeleted = proto.hasOwnProperty('Father');
    delete proto.Father;
    var afterDeleted = proto.hasOwnProperty('Father');
    return preCheck && beforeDeleted && !afterDeleted;
});
runTestCase(testcase);