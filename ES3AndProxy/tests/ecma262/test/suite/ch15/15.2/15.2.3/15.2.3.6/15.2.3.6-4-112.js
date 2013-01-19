wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function getFunc() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: undefined,
        get: getFunc,
        enumerable: true,
        configurable: true
    }));
    wrapTestObject(function setFunc(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ set: setFunc }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, setFunc, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);