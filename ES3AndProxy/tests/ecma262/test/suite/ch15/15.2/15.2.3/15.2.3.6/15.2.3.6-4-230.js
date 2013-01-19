var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        arrObj.helpVerifySet = 10;
        var getFunc = wrapTestObject(function getFunc() {
                return arrObj.helpVerifySet;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
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