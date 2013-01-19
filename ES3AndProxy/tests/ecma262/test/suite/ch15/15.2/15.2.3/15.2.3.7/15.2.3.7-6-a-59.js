wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function set_func(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ set: set_func }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ set: set_func }) }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, set_func, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);