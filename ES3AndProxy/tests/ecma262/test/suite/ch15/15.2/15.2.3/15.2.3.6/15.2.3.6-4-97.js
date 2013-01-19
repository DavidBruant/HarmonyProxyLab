wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function getFunc() {
        return 'property';
    });
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: getFunc,
        configurable: false
    }));
    try {
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: getFunc,
            set: wrapTestObject(function () {
            }),
            configurable: false
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'property', getFunc, undefined, undefined, false, false);
    }
});
runTestCase(testcase);