wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'value', wrapTestObject({
        get: wrapTestObject(function () {
            return 'inheritedAccessorProperty';
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(child, 'value', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    Object.defineProperty(obj, 'property', child);
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
});
runTestCase(testcase);