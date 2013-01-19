var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        var getFunc = wrapTestObject(function getFunc() {
                return 12;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
                arrObj.setVerifyHelpProp = value;
            });
        Object.defineProperty(arrObj, 'property', wrapTestObject({
            get: getFunc,
            set: setFunc
        }));
        try {
            Object.defineProperty(arrObj, 'property', wrapTestObject({
                get: wrapTestObject(function () {
                    return 36;
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, 'property', getFunc, setFunc, 'setVerifyHelpProp', false, false);
        }
    });
runTestCase(testcase);