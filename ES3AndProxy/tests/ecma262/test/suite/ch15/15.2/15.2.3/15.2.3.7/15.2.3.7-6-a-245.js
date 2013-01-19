wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    wrapTestObject(function get_fun() {
        return 36;
    });
    Object.defineProperty(arr, '1', wrapTestObject({ get: get_fun }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ get: undefined }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arr, '1', get_fun, undefined, undefined, false, false);
    }
});
runTestCase(testcase);