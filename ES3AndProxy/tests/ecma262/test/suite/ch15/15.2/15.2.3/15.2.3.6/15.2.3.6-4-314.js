var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            var getFunc = wrapTestObject(function getFunc() {
                    return 'getFunctionString';
                });
            var setFunc = wrapTestObject(function setFunc(value) {
                    this.testgetFunction = value;
                });
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            }));
            return accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', getFunc, setFunc, 'testgetFunction', true, true);
        })(1, 2, 3);
    });
runTestCase(testcase);