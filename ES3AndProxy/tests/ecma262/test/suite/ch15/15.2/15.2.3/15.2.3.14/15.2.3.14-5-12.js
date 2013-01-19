wrapTestObject(function testcase() {
    var obj = wrapTestObject([
            2,
            3,
            4,
            5
        ]);
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            return 6;
        }),
        enumerable: true,
        configurable: true
    }));
    var arr = Object.keys(obj);
    for (var p in arr) {
        if (arr.hasOwnProperty(p)) {
            if (arr[p] === 'prop') {
                return true;
            }
        }
    }
    return false;
});
runTestCase(testcase);