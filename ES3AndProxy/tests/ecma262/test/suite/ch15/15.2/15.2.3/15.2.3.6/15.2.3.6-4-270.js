wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function setFunc(value) {
        arrObj.setVerifyHelpProp = value;
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({
        set: undefined,
        configurable: true
    }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ set: setFunc }));
    return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, setFunc, 'setVerifyHelpProp', false, true);
});
runTestCase(testcase);