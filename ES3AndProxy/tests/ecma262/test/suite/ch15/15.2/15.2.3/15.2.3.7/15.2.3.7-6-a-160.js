wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1
        ]);
    Object.defineProperty(arr, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 0 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arr.length === 2 && arr[0] === 0 && arr[1] === 1;
    }
});
runTestCase(testcase);