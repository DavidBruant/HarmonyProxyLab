var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            var getFunc = wrapTestObject(function getFunc() {
                    return 'genericPropertyString';
                });
            var setFunc = wrapTestObject(function setFunc(value) {
                    this.helpVerifyGet = value;
                });
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                get: getFunc,
                set: setFunc,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                    get: wrapTestObject(function () {
                        return 'overideGenericPropertyString';
                    })
                }));
            } catch (e) {
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', getFunc, setFunc, 'helpVerifyGet', false, false, false);
            }
            return false;
        })(1, 2, 3);
    });
runTestCase(testcase);