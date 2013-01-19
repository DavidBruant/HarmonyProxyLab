wrapTestObject(function testcase() {
    var proto = wrapTestObject({});
    Object.defineProperty(proto, 'prop', wrapTestObject({
        value: 1003,
        enumerable: true,
        configurable: true
    }));
    var Con = wrapTestObject(function () {
        });
    Con.prototype = proto;
    var obj = wrapTestObject(new Con());
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
        }),
        enumerable: false,
        configurable: true
    }));
    var arr = Object.keys(obj);
    for (var p in arr) {
        if (arr[p] === 'prop') {
            return false;
        }
    }
    return true;
});
runTestCase(testcase);