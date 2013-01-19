wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function getFunc() {
        return 100;
    });
    Object.defineProperty(arrObj, '0', wrapTestObject({
        get: wrapTestObject(function () {
            return 12;
        }),
        configurable: true
    }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ get: getFunc }));
    return accessorPropertyAttributesAreCorrect(arrObj, '0', getFunc, undefined, undefined, false, true);
});
runTestCase(testcase);