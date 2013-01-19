var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            delete arguments[0];
            var getFunc = wrapTestObject(function getFunc() {
                    return 10;
                });
            var setFunc = wrapTestObject(function setFunc(value) {
                    this.setVerifyHelpProp = value;
                });
            Object.defineProperty(arguments, '0', wrapTestObject({
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            }));
            return accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, setFunc, 'setVerifyHelpProp', true, true);
        })(0, 1, 2);
    });
runTestCase(testcase);