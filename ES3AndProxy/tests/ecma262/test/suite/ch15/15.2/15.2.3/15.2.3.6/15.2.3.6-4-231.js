wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj.helpVerifySet = 10;
    wrapTestObject(function getFunc1() {
        return 20;
    });
    wrapTestObject(function getFunc2() {
        return arrObj.helpVerifySet;
    });
    wrapTestObject(function setFunc(value) {
        arrObj.helpVerifySet = value;
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({
        get: getFunc1,
        set: setFunc,
        configurable: true
    }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ get: getFunc2 }));
    return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc2, setFunc, 'helpVerifySet', false, true);
});
runTestCase(testcase);