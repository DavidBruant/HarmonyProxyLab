wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function set_func(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: undefined,
        set: set_func,
        enumerable: false,
        configurable: false
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ get: undefined }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);