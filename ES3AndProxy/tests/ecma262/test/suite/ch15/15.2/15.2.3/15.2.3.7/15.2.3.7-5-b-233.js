wrapTestObject(function testcase() {
    var data = 'data';
    var setFun = wrapTestObject(function (value) {
            data = value;
        });
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'set', wrapTestObject({
        get: wrapTestObject(function () {
            return setFun;
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var child = wrapTestObject(new Con());
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ prop: child }));
    obj.prop = 'overrideData';
    return obj.hasOwnProperty('prop') && data === 'overrideData';
});
runTestCase(testcase);