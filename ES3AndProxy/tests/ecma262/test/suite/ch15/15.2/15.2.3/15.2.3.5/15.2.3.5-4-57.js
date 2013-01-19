wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    var accessed = false;
    Object.defineProperty(proto, 'enumerable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var descObj = wrapTestObject(new ConstructFun());
    Object.defineProperty(descObj, 'enumerable', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return !accessed;
});
runTestCase(testcase);