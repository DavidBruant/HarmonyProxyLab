var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({
            '0': wrapTestObject({
                set: wrapTestObject(function () {
                }),
                get: wrapTestObject(function () {
                }),
                configurable: true
            })
        }));
        for (var i in arr) {
            if (i === '0' && arr.hasOwnProperty('0')) {
                return false;
            }
        }
        return true;
    });
runTestCase(testcase);