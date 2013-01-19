var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function getFunc() {
                return 10;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
                obj.verifyGetHelpMethod = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: getFunc,
            set: setFunc,
            configurable: false
        }));
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({ get: getFunc }));
            return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc, setFunc, 'verifyGetHelpMethod', false, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);