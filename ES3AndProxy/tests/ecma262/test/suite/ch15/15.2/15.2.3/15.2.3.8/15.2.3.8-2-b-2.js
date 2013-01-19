wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.variableForHelpVerify = 'data';
    wrapTestObject(function setFunc(value) {
        obj.variableForHelpVerify = value;
    });
    wrapTestObject(function getFunc() {
        return 10;
    });
    Object.defineProperty(obj, 'foo', wrapTestObject({
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    }));
    var preCheck = Object.isExtensible(obj);
    Object.seal(obj);
    return preCheck && accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, setFunc, 'variableForHelpVerify', true, false);
});
runTestCase(testcase);