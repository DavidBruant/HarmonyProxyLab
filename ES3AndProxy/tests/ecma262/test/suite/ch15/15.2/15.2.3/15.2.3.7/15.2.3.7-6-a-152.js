var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        try {
            Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 4294967296 }) }));
            return false;
        } catch (e) {
            return e instanceof RangeError && arr.length === 0;
        }
    });
runTestCase(testcase);