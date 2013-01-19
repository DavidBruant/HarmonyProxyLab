wrapTestObject(function testcase() {
    try {
        Object.defineProperty(Array.prototype, '0', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            }),
            configurable: true
        }));
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({
            '0': wrapTestObject({
                get: wrapTestObject(function () {
                    return 12;
                }),
                configurable: false
            })
        }));
        return arr.hasOwnProperty('0') && arr[0] === 12 && Array.prototype[0] === 11;
    } finally {
        delete Array.prototype[0];
    }
});
runTestCase(testcase);