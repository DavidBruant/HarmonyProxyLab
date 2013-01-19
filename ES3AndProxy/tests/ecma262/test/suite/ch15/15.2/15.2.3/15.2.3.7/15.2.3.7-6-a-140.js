wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: '0002.0' }) }));
    return arr.length === 2;
});
runTestCase(testcase);