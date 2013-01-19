wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    try {
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ configurable: true }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError;
    }
});
runTestCase(testcase);