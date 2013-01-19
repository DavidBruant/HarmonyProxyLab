wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'foo', wrapTestObject({
        value: 11,
        configurable: false
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var obj = wrapTestObject(new ConstructFun());
    Object.defineProperty(obj, 'foo', wrapTestObject({ configurable: true }));
    return obj.hasOwnProperty('foo') && typeof obj.foo === 'undefined';
});
runTestCase(testcase);