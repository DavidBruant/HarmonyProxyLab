var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function () {
                return arguments;
            })();
        obj.verifySetFunction = 'data';
        Object.defineProperty(obj, '0', wrapTestObject({
            get: wrapTestObject(function () {
                return obj.verifySetFunction;
            }),
            set: wrapTestObject(function (value) {
                obj.verifySetFunction = value;
            }),
            configurable: true
        }));
        obj.verifySetFunction1 = 'data1';
        var getFunc = wrapTestObject(function () {
                return obj.verifySetFunction1;
            });
        var setFunc = wrapTestObject(function (value) {
                obj.verifySetFunction1 = value;
            });
        Object.defineProperty(obj, '0', wrapTestObject({
            get: getFunc,
            set: setFunc
        }));
        return accessorPropertyAttributesAreCorrect(obj, '0', getFunc, setFunc, 'verifySetFunction1', false, true);
    });
runTestCase(testcase);