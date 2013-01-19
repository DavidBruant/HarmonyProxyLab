var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([
                0,
                1
            ]);
        try {
            Object.defineProperty(arr, '1', wrapTestObject({
                get: wrapTestObject(function () {
                    return 2;
                }),
                configurable: false
            }));
            Array.prototype[1] = 3;
            Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 1 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arr.length === 2 && arr.hasOwnProperty('1') && arr[0] === 0 && arr[1] === 2;
        } finally {
            delete Array.prototype[1];
        }
    });
runTestCase(testcase);