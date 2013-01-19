var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '0', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            }),
            configurable: false
        }));
        try {
            Object.defineProperties(arr, wrapTestObject({
                '0': wrapTestObject({
                    get: wrapTestObject(function () {
                        return 12;
                    }),
                    configurable: true
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arr[0] === 11;
        }
    });
runTestCase(testcase);