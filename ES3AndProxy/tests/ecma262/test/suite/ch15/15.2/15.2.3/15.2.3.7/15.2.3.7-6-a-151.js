var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 4294967295 }) }));
        return arr.length === 4294967295;
    });
runTestCase(testcase);