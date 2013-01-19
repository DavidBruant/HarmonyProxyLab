var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject([]);
        obj.verifySetFunction = 'data';
        var getFunc = wrapTestObject(function () {
                return obj.verifySetFunction;
            });
        var setFunc = wrapTestObject(function (value) {
                obj.verifySetFunction = value;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: getFunc,
            set: setFunc,
            configurable: false
        }));
        var result = false;
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    return 100;
                })
            }));
        } catch (e) {
            result = e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'prop', getFunc, setFunc, 'verifySetFunction', false, false);
        }
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({
                set: wrapTestObject(function (value) {
                    obj.verifySetFunction1 = value;
                })
            }));
        } catch (e1) {
            return result && e1 instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'prop', getFunc, setFunc, 'verifySetFunction', false, false);
        }
    });
runTestCase(testcase);