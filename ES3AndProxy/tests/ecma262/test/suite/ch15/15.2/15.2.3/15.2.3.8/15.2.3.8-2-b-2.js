var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.variableForHelpVerify = 'data';
        var setFunc = wrapTestObject(function setFunc(value) {
                obj.variableForHelpVerify = value;
            });
        var getFunc = wrapTestObject(function getFunc() {
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