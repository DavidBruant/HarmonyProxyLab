var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
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
                var verifyFormal = a === 1;
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', getFunc, setFunc, 'helpVerifyGet', false, false, false) && verifyFormal;
            }
            return false;
        })(1, 2, 3);
    });
runTestCase(testcase);