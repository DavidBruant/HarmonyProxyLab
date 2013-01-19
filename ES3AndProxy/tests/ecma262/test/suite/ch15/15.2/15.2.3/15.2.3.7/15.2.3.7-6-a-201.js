wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({
        '0': wrapTestObject({
            set: wrapTestObject(function () {
            }),
            enumerable: true,
            configurable: true
        })
    }));
    return arr.hasOwnProperty('0') && typeof arr[0] === 'undefined';
});
runTestCase(testcase);