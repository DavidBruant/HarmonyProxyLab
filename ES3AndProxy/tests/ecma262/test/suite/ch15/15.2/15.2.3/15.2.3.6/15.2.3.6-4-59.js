var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function getFunc() {
                return 0;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
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