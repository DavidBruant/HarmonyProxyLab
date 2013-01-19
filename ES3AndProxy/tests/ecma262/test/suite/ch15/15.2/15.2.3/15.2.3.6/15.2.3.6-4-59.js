wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function getFunc() {
        return 0;
    });
    wrapTestObject(function setFunc(value) {
        obj.helpVerifySet = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc,
        set: setFunc
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({}));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, setFunc, 'helpVerifySet', false, false);
});
runTestCase(testcase);