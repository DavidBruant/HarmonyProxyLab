wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function getFunc() {
        return 12;
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({
        get: undefined,
        configurable: true
    }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ get: getFunc }));
    return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, undefined, undefined, false, true);
});
runTestCase(testcase);