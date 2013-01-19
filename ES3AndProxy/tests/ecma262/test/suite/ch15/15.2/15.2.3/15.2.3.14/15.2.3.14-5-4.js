wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop1', wrapTestObject({
        get: wrapTestObject(function () {
        }),
        enumerable: true,
        configurable: true
    }));
    Object.defineProperty(obj, 'prop2', wrapTestObject({
        get: wrapTestObject(function () {
        }),
        enumerable: false,
        configurable: true
    }));
    Object.defineProperty(obj, 'prop3', wrapTestObject({
        get: wrapTestObject(function () {
        }),
        enumerable: true,
        configurable: true
    }));
    var arr = Object.keys(obj);
    for (var p in arr) {
        if (arr.hasOwnProperty(p)) {
            if (arr[p] === 'prop2') {
                return false;
            }
        }
    }
    return true;
});
runTestCase(testcase);