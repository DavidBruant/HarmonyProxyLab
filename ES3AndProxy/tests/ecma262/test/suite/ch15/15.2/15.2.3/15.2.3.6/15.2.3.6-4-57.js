wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var setFunc = wrapTestObject(function (value) {
            obj.setVerifyHelpProp = value;
        });
    var getFunc = wrapTestObject(function () {
            return 14;
        });
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: wrapTestObject(function () {
            return 11;
        }),
        set: wrapTestObject(function (value) {
        }),
        configurable: true,
        enumerable: true
    }));
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: getFunc,
        set: setFunc,
        configurable: false,
        enumerable: false
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'property', getFunc, setFunc, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);