wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    var isOwnProperty = false;
    var canWritable = false;
    Object.defineProperties(arr, wrapTestObject({
        '0': wrapTestObject({
            value: 1001,
            enumerable: true,
            configurable: false
        })
    }));
    isOwnProperty = arr.hasOwnProperty('0');
    arr[0] = 12;
    canWritable = arr[0] === 12;
    return isOwnProperty && !canWritable && arr[0] === 1001;
});
runTestCase(testcase);