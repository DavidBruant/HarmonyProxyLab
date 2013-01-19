var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Array.prototype, '0', wrapTestObject({
                get: wrapTestObject(function () {
                    return 11;
                }),
                configurable: true
            }));
            var arr = wrapTestObject([]);
            Object.defineProperty(arr, '0', wrapTestObject({
                value: 12,
                configurable: false
            }));
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ configurable: true }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arr[0] === 12 && Array.prototype[0] === 11;
        } finally {
            delete Array.prototype[0];
        }
    });
runTestCase(testcase);