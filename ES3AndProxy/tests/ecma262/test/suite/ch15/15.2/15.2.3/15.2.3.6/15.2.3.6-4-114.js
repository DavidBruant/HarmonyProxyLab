wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function setFunc(value) {
        obj.setVerifyHelpProp = value;
    });
    wrapTestObject(function getFunc() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc,
        set: setFunc,
        configurable: true
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc,
        configurable: false
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, setFunc, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);