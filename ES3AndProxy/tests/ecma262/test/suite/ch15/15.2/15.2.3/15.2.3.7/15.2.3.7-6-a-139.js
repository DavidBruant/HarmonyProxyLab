var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: '0x00B' }) }));
        return arr.length === 11;
    });
runTestCase(testcase);