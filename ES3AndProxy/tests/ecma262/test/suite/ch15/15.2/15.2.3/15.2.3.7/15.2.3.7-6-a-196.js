wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({
        '0': wrapTestObject({
            writable: true,
            enumerable: true,
            configurable: false
        })
    }));
    return arr.hasOwnProperty('0') && typeof arr[0] === 'undefined';
});
runTestCase(testcase);