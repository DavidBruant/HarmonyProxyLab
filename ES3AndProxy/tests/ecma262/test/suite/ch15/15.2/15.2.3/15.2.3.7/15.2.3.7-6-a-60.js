wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function set_func1() {
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: set_func1,
        configurable: true
    }));
    wrapTestObject(function set_func2(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_func2 }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func2, 'setVerifyHelpProp', false, true);
});
runTestCase(testcase);