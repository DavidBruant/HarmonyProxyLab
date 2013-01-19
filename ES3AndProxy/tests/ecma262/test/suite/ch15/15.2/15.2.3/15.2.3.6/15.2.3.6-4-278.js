wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function getFunc() {
        return 12;
    });
    wrapTestObject(function setFunc(value) {
        arrObj.setVerifyHelpProp = value;
    });
    Object.defineProperty(arrObj, 'property', wrapTestObject({
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    }));
    return accessorPropertyAttributesAreCorrect(arrObj, 'property', getFunc, setFunc, 'setVerifyHelpProp', true, true);
});
runTestCase(testcase);