wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj.helpVerifySet = 10;
    wrapTestObject(function getFunc() {
        return arrObj.helpVerifySet;
    });
    wrapTestObject(function setFunc(value) {
        arrObj.helpVerifySet = value;
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({
        get: getFunc,
        set: setFunc
    }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ get: getFunc }));
    return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, setFunc, 'helpVerifySet', false, false);
});
runTestCase(testcase);