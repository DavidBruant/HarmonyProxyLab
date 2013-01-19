wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function getFunc1() {
        return 10;
    });
    wrapTestObject(function setFunc1() {
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc1,
        set: setFunc1,
        enumerable: true,
        configurable: true
    }));
    wrapTestObject(function getFunc2() {
        return 20;
    });
    wrapTestObject(function setFunc2(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc2,
        set: setFunc2,
        enumerable: false
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc2, setFunc2, 'setVerifyHelpProp', false, true);
});
runTestCase(testcase);