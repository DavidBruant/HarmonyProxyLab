wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var setFunc = wrapTestObject(function (value) {
            obj.setVerifyHelpProp = value;
        });
    Object.defineProperty(obj, 'property', wrapTestObject({
        set: setFunc,
        enumerable: true,
        configurable: true
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'property', undefined, setFunc, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);