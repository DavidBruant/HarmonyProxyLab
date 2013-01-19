var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var setFunc1 = wrapTestObject(function setFunc1() {
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({
            set: setFunc1,
            configurable: true
        }));
        var setFunc2 = wrapTestObject(function setFunc2(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, '0', wrapTestObject({ set: setFunc2 }));
        return accessorPropertyAttributesAreCorrect(arrObj, '0', undefined, setFunc2, 'setVerifyHelpProp', false, true);
    });
runTestCase(testcase);