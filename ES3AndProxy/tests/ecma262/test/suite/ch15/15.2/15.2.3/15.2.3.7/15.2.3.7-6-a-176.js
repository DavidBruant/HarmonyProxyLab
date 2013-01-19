wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1
        ]);
    try {
        Object.defineProperty(arr, '1', wrapTestObject({ configurable: false }));
        Object.defineProperties(arr, wrapTestObject({
            length: wrapTestObject({
                value: 1,
                writable: false
            })
        }));
        return false;
    } catch (e) {
        arr.length = 10;
        return e instanceof TypeError && arr.hasOwnProperty('1') && arr.length === 2 && arr[0] === 0 && arr[1] === 1;
    }
});
runTestCase(testcase);