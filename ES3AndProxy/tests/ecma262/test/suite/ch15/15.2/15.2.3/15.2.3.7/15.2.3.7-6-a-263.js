wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    arr.length = 3;
    Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: 26 }) }));
    return arr.length === 3 && arr[1] === 26;
});
runTestCase(testcase);