wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    var isOwnProperty = false;
    var canEnumerable = false;
    Object.defineProperties(arr, wrapTestObject({
        '0': wrapTestObject({
            value: 1001,
            writable: true,
            configurable: true
        })
    }));
    isOwnProperty = arr.hasOwnProperty('0');
    for (var i in arr) {
        if (i === '0') {
            canEnumerable = true;
        }
    }
    return isOwnProperty && !canEnumerable && arr[0] === 1001;
});
runTestCase(testcase);