var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                get: wrapTestObject(function () {
                    return 1001;
                }),
                set: wrapTestObject(function (value) {
                    this.testgetFunction1 = value;
                }),
                enumerable: true,
                configurable: true
            }));
            var getFunc = wrapTestObject(function getFunc() {
                    return 'getFunctionString';
                });
            var setFunc = wrapTestObject(function setFunc(value) {
                    this.testgetFunction = value;
                });
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                get: getFunc,
                set: setFunc,
                enumerable: false,
                configurable: false
            }));
            return accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', getFunc, setFunc, 'testgetFunction', false, false);
        })(1, 2, 3);
    });
runTestCase(testcase);