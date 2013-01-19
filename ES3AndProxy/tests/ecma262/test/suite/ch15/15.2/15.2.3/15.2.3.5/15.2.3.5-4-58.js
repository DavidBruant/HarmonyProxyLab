wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    var accessed = false;
    Object.defineProperty(proto, 'enumerable', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var ConstructFun = wrapTestObject(function () {
        });
    ConstructFun.prototype = proto;
    var descObj = wrapTestObject(new ConstructFun());
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return !accessed;
});
runTestCase(testcase);