wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    wrapTestObject(function get_fun() {
        return 36;
    });
    Object.defineProperty(arr, '0', wrapTestObject({
        get: wrapTestObject(function () {
            return 12;
        }),
        configurable: true
    }));
    Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ get: get_fun }) }));
    return accessorPropertyAttributesAreCorrect(arr, '0', get_fun, undefined, undefined, false, true);
});
runTestCase(testcase);