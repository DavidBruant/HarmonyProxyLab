var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function getFunc() {
                return 11;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: getFunc,
            configurable: false
        }));
        try {
            Object.defineProperties(obj, wrapTestObject({
                prop: wrapTestObject({
                    value: 12,
                    configurable: true
                })
            }));
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(obj, 'prop', getFunc, undefined, undefined, false, false);
        }
    });
runTestCase(testcase);