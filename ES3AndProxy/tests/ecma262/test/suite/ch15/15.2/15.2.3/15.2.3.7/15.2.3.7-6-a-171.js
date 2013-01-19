wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1
        ]);
    try {
        Object.defineProperty(Array.prototype, '1', wrapTestObject({
            get: wrapTestObject(function () {
                return 1;
            }),
            configurable: true
        }));
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 1 }) }));
        return arr.length === 1 && !arr.hasOwnProperty('1') && arr[0] === 0 && Array.prototype[1] === 1;
    } finally {
        delete Array.prototype[1];
    }
});
runTestCase(testcase);