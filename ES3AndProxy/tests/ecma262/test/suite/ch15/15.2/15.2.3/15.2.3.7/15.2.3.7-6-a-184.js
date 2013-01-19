wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            1,
            2,
            3
        ]);
    Object.defineProperty(arr, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '3': wrapTestObject({ value: 'abc' }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arr[0] === 1 && arr[1] === 2 && arr[2] === 3 && !arr.hasOwnProperty('3');
    }
});
runTestCase(testcase);