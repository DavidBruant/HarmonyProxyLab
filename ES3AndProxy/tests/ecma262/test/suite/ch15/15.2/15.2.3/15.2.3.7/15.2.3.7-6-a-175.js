wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1,
            2,
            3
        ]);
    Object.defineProperty(arr, '1', wrapTestObject({ configurable: false }));
    try {
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 1 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arr.length === 2;
    }
});
runTestCase(testcase);