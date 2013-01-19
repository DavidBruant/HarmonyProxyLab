wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, 'length', wrapTestObject({ writable: false }));
    try {
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ writable: true }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);