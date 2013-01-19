wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function setFunc(value) {
        arrObj.setVerifyHelpProp = value;
    });
    wrapTestObject(function getFunc() {
        return 12;
    });
    Object.defineProperty(arrObj, '1', wrapTestObject({
        get: wrapTestObject(function () {
            return 6;
        }),
        set: setFunc,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperty(arrObj, '1', wrapTestObject({
        get: getFunc,
        enumerable: false,
        configurable: false
    }));
    return accessorPropertyAttributesAreCorrect(arrObj, '1', getFunc, setFunc, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);