wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function set_func1(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: set_func1,
        configurable: false
    }));
    wrapTestObject(function set_func2() {
    });
    try {
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_func2 }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func1, 'setVerifyHelpProp', false, false);
    }
});
runTestCase(testcase);