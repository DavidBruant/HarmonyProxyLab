wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    wrapTestObject(function getFunc() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc,
        enumerable: false
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, undefined, undefined, false, true);
});
runTestCase(testcase);