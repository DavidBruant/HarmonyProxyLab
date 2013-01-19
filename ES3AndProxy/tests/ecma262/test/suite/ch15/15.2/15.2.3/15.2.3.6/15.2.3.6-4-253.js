wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    wrapTestObject(function getFunc() {
        return 12;
    });
    Object.defineProperty(arrObj, '1', wrapTestObject({
        get: getFunc,
        set: undefined
    }));
    try {
        Object.defineProperty(arrObj, '1', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, '1', getFunc, undefined, undefined, false, false);
    }
});
runTestCase(testcase);