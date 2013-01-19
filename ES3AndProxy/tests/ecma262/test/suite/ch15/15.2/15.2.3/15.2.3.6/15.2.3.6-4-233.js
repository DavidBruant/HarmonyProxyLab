wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function setFunc1() {
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({
        set: setFunc1,
        configurable: true
    }));
    wrapTestObject(function setFunc2(value) {
        arrObj.setVerifyHelpProp = value;
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({ set: setFunc2 }));
    return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, setFunc2, 'setVerifyHelpProp', false, true);
});
runTestCase(testcase);