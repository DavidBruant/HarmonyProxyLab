var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ '5': wrapTestObject({ value: 26 }) }));
        return arr.length === 6 && arr[5] === 26;
    });
runTestCase(testcase);