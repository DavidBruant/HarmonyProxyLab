wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1,
            2
        ]);
    var result = 0;
    try {
        Object.defineProperty(arr, '1', wrapTestObject({ configurable: false }));
        Object.defineProperties(arr, wrapTestObject({
            length: wrapTestObject({
                value: 0,
                writable: false
            })
        }));
        return false;
    } catch (e) {
        result = arr.length === 2;
        arr.length = 10;
        return e instanceof TypeError && result && arr.length === 2;
    }
});
runTestCase(testcase);