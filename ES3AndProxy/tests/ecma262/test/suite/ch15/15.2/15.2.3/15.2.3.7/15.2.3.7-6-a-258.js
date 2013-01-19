wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({
        set: wrapTestObject(function () {
        }),
        configurable: true
    }));
    Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ set: undefined }) }));
    return accessorPropertyAttributesAreCorrect(arr, '0', undefined, undefined, undefined, false, true);
});
runTestCase(testcase);