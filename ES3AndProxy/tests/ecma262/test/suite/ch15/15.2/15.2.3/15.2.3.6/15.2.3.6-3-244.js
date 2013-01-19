wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    var data1 = 'data';
    var data2 = 'data';
    Object.defineProperty(proto, 'set', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function (value) {
                data1 = value;
            });
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var child = wrapTestObject(new ConstructFun());
    Object.defineProperty(child, 'set', wrapTestObject({
        get: wrapTestObject(function () {
            return wrapTestObject(function (value) {
                data2 = value;
            });
        })
    }));
    Object.defineProperty(obj, 'property', child);
    obj.property = 'ownAccessorProperty';
    return obj.hasOwnProperty('property') && data1 === 'data' && data2 === 'ownAccessorProperty';
});
runTestCase(testcase);