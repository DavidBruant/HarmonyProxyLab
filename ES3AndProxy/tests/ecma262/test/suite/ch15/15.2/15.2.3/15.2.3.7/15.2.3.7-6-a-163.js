wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1
        ]);
    Object.defineProperties(arr, wrapTestObject({
        length: wrapTestObject({
            value: 1,
            writable: false
        })
    }));
    arr.length = 10;
    return !arr.hasOwnProperty('1') && arr.length === 1 && arr[0] === 0;
});
runTestCase(testcase);