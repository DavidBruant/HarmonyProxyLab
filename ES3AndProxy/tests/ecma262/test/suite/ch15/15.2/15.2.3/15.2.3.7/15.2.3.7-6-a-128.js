var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 12 }) }));
        return arr.length === 12;
    });
runTestCase(testcase);