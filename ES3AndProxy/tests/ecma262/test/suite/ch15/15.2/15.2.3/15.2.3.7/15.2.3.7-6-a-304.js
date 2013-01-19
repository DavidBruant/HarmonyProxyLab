var testcase = wrapTestObject(function testcase() {
        var arg = wrapTestObject(function () {
                return arguments;
            })(1, 2, 3);
        Object.defineProperty(arg, 'genericProperty', wrapTestObject({
            get: wrapTestObject(function () {
                return 1001;
            }),
            set: wrapTestObject(function (value) {
                arg.testGetFunction1 = value;
            }),
            enumerable: true,
            configurable: true
        }));
        var getFun = wrapTestObject(function getFun() {
                return 'getFunctionString';
            });
        var setFun = wrapTestObject(function setFun(value) {
                arg.testGetFunction = value;
            });
        Object.defineProperties(arg, wrapTestObject({
            'genericProperty': wrapTestObject({
                get: getFun,
                set: setFun,
                enumerable: false,
                configurable: false
            })
        }));
        return accessorPropertyAttributesAreCorrect(arg, 'genericProperty', getFun, setFun, 'testGetFunction', false, false);
    });
runTestCase(testcase);