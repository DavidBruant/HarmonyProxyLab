wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: '2E3' }) }));
    return arr.length === 2000;
});
runTestCase(testcase);