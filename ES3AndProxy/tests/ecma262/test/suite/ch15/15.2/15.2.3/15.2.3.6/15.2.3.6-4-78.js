wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function setFunc1() {
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: setFunc1,
        configurable: true
    }));
    wrapTestObject(function setFunc2(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ set: setFunc2 }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, setFunc2, 'setVerifyHelpProp', false, true);
});
runTestCase(testcase);