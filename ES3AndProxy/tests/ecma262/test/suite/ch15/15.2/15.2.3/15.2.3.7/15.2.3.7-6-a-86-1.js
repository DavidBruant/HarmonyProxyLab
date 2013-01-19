wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var set_func = wrapTestObject(function (value) {
            obj.setVerifyHelpProp = value;
        });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: set_func,
        configurable: false
    }));
    set_func = wrapTestObject(function (value) {
        obj.setVerifyHelpProp1 = value;
    });
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_func }) }));
    } catch (e) {
        return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func, 'setVerifyHelpProp', false, false);
    }
});
runTestCase(testcase);