var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, 'length', wrapTestObject({ writable: false }));
        try {
            Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 12 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && arr.length === 0;
        }
    });
runTestCase(testcase);