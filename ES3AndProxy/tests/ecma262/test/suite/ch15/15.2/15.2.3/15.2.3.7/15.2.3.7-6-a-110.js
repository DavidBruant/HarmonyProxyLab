wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function get_func() {
        return 10;
    });
    wrapTestObject(function set_func(value) {
        obj.setVerifyHelpProp = value;
    });
    var properties = wrapTestObject({
            foo1: wrapTestObject({
                value: 200,
                enumerable: true,
                writable: true,
                configurable: true
            }),
            foo2: wrapTestObject({
                get: get_func,
                set: set_func,
                enumerable: true,
                configurable: true
            })
        });
    Object.defineProperties(obj, properties);
    return dataPropertyAttributesAreCorrect(obj, 'foo1', 200, true, true, true) && accessorPropertyAttributesAreCorrect(obj, 'foo2', get_func, set_func, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);