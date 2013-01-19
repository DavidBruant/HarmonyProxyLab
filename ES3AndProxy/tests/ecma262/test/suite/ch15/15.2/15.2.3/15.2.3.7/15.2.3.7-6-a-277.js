wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    wrapTestObject(function set_fun(value) {
        arr.setVerifyHelpProp = value;
    });
    Object.defineProperty(arr, 'property', wrapTestObject({
        set: set_fun,
        configurable: false
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({ 'property': wrapTestObject({ configurable: true }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arr, 'property', undefined, set_fun, 'setVerifyHelpProp', false, false);
    }
});
runTestCase(testcase);