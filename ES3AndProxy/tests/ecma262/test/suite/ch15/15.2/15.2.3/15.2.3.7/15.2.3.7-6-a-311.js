var testcase = wrapTestObject(function testcase() {
        var arg = wrapTestObject(function () {
                return arguments;
            })(1, 2, 3);
        var setFun = wrapTestObject(function setFun(value) {
                arg.genericPropertyString = value;
            });
        Object.defineProperty(arg, 'genericProperty', wrapTestObject({
            set: setFun,
            configurable: false
        }));
        try {
            Object.defineProperties(arg, wrapTestObject({
                'genericProperty': wrapTestObject({
                    set: wrapTestObject(function (value) {
                        arg.genericPropertyString1 = value;
                    })
                })
            }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arg, 'genericProperty', undefined, setFun, 'genericPropertyString', false, false, false);
        }
    });
runTestCase(testcase);