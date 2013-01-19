wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1
        ]);
    Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: null }) }));
    return arr.length === 0;
});
runTestCase(testcase);