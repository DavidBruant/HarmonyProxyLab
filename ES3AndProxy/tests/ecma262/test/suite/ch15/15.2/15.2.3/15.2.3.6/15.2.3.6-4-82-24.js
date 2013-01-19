wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.verifySetFunction = 'data';
    var get_func = wrapTestObject(function () {
            return obj.verifySetFunction;
        });
    var set_func = wrapTestObject(function (value) {
            obj.verifySetFunction = value;
        });
    Object.defineProperty(obj, '0', wrapTestObject({
        get: get_func,
        set: set_func,
        enumerable: false,
        configurable: true
    }));
    Object.defineProperty(obj, '0', wrapTestObject({ enumerable: true }));
    return accessorPropertyAttributesAreCorrect(obj, '0', get_func, set_func, 'verifySetFunction', true, true);
});
runTestCase(testcase);