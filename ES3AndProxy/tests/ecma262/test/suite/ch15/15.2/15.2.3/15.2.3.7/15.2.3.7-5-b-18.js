wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var proto = wrapTestObject({});
    var accessed = false;
    Object.defineProperty(proto, 'enumerable', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var descObj = wrapTestObject(new Con());
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    for (var property in obj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return !accessed;
});
runTestCase(testcase);