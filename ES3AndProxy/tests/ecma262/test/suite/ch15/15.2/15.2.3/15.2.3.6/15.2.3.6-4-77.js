wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function setFunc(value) {
        obj.setVerifyHelpProp = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ set: setFunc }));
    Object.defineProperty(obj, 'foo', wrapTestObject({ set: setFunc }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', undefined, setFunc, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);