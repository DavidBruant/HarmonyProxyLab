wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    wrapTestObject(function set_fun(value) {
        arr.setVerifyHelpProp = value;
    });
    Object.defineProperty(arr, '0', wrapTestObject({
        set: undefined,
        configurable: true
    }));
    try {
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ set: set_fun }) }));
        return accessorPropertyAttributesAreCorrect(arr, '0', undefined, set_fun, 'setVerifyHelpProp', false, true);
    } catch (ex) {
        return false;
    }
});
runTestCase(testcase);