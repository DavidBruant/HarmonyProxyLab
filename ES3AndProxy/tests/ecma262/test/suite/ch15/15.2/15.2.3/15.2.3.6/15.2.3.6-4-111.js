var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function getFunc() {
                return 10;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
                obj.setVerifyHelpProp = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(obj, 'foo', wrapTestObject({
            set: undefined,
            get: getFunc
        }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
        return obj.hasOwnProperty('foo') && typeof desc.set === 'undefined';
    });
runTestCase(testcase);