wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: '2' }) }));
    return arr.length === 2;
});
runTestCase(testcase);