var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([
                0,
                1
            ]);
        try {
            Object.defineProperties(arr, wrapTestObject({
                length: wrapTestObject({
                    value: 0,
                    writable: false
                })
            }));
            arr.length = 10;
            return !arr.hasOwnProperty('1') && arr.length === 0 && !arr.hasOwnProperty('0');
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);