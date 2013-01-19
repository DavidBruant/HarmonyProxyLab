wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperty(arr, '0', wrapTestObject({
        get: wrapTestObject(function () {
            return 12;
        }),
        configurable: true
    }));
    Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ get: undefined }) }));
    return accessorPropertyAttributesAreCorrect(arr, '0', undefined, undefined, undefined, false, true);
});
runTestCase(testcase);