var testcase = wrapTestObject(function testcase() {
        var arg = wrapTestObject(function () {
                return arguments;
            })(1, 2, 3);
        var getFun = wrapTestObject(function getFun() {
                return 'genericPropertyString';
            });
        var setFun = wrapTestObject(function setFun(value) {
                arg.verifySetFun = value;
            });
        Object.defineProperty(arg, 'genericProperty', wrapTestObject({
            get: getFun,
            set: setFun,
            configurable: false
        }));
        try {
            Object.defineProperties(arg, wrapTestObject({
                'genericProperty': wrapTestObject({
                    get: wrapTestObject(function () {
                        return 'overideGenericPropertyString';
                    })
                })
            }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arg, 'genericProperty', getFun, setFun, 'verifySetFun', false, false, false);
        }
    });
runTestCase(testcase);