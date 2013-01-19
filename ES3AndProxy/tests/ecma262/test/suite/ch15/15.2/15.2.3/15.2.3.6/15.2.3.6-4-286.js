wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function setFunc(value) {
        arrObj.setVerifyHelpProp = value;
    });
    Object.defineProperty(arrObj, 'property', wrapTestObject({ set: setFunc }));
    try {
        Object.defineProperty(arrObj, 'property', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, 'property', undefined, setFunc, 'setVerifyHelpProp', false, false);
    }
});
runTestCase(testcase);