wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'get', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(obj, 'property', child);
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
});
runTestCase(testcase);