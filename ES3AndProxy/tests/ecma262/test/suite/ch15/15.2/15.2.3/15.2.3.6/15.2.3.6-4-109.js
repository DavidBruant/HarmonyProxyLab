wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function setFunc(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: setFunc,
        get: undefined,
        enumerable: true,
        configurable: true
    }));
    wrapTestObject(function getFunc() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ get: getFunc }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, setFunc, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);