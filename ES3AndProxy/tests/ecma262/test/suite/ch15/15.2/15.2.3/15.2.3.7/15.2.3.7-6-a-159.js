wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 0 }) }));
        return true && arr.length === 0;
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);