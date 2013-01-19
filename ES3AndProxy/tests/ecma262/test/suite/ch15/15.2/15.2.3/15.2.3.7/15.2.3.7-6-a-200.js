wrapTestObject(function testcase() {
    var arr = wrapTestObject([1]);
    Object.defineProperties(arr, wrapTestObject({
        '0': wrapTestObject({
            value: 1001,
            writable: false,
            enumerable: false,
            configurable: false
        })
    }));
    return dataPropertyAttributesAreCorrect(arr, '0', 1001, false, false, false);
});
runTestCase(testcase);