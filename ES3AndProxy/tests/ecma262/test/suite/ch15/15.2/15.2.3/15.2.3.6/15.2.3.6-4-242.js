wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([3]);
    wrapTestObject(function setFunc(value) {
        arrObj.setVerifyHelpProp = value;
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({ set: setFunc }));
    return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, setFunc, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);