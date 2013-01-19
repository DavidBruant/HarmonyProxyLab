wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function getFunc() {
        return 10;
    });
    wrapTestObject(function setFunc(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc,
        set: setFunc,
        configurable: true
    }));
    wrapTestObject(function getFunc2() {
        return 20;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ get: getFunc2 }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc2, setFunc, 'setVerifyHelpProp', false, true);
});
runTestCase(testcase);