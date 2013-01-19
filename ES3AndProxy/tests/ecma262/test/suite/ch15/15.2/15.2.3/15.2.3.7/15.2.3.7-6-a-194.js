wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.preventExtensions(arr);
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: 1 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arr.hasOwnProperty('0') === false;
    }
});
runTestCase(testcase);