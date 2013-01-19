var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([
                0,
                1,
                2
            ]);
        Object.defineProperty(arr, '1', wrapTestObject({ configurable: false }));
        Object.defineProperty(arr, '2', wrapTestObject({ configurable: true }));
        try {
            Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 1 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arr.length === 2 && !arr.hasOwnProperty('2') && arr[0] === 0 && arr[1] === 1;
        }
    });
runTestCase(testcase);