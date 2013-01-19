wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function setFunc(value) {
        arrObj.setVerifyHelpProp = value;
    });
    Object.defineProperty(arrObj, '1', wrapTestObject({ set: setFunc }));
    try {
        Object.defineProperty(arrObj, '1', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, '1', undefined, setFunc, 'setVerifyHelpProp', false, false);
    }
});
runTestCase(testcase);