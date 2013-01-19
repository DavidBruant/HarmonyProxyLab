wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function getFunc1() {
        return 10;
    });
    wrapTestObject(function setFunc1(value) {
        obj.helpVerifySet = value;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc1,
        set: setFunc1,
        configurable: true
    }));
    wrapTestObject(function getFunc2() {
        return 20;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({ get: getFunc2 }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc2, setFunc1, 'helpVerifySet', false, true);
});
runTestCase(testcase);