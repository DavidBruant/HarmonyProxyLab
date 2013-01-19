wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({ '4294967294': wrapTestObject({ value: 100 }) }));
    return arr.hasOwnProperty('4294967294') && arr.length === 4294967295 && arr[4294967294] === 100;
});
runTestCase(testcase);