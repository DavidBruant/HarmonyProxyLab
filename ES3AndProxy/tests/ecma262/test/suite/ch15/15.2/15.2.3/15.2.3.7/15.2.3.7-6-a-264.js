var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        arr.length = 3;
        Object.defineProperties(arr, wrapTestObject({ '3': wrapTestObject({ value: 26 }) }));
        return arr.length === 4 && arr[3] === 26;
    });
runTestCase(testcase);