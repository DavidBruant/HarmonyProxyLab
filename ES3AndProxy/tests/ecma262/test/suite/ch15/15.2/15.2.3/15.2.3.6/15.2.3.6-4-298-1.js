var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function (a, b, c) {
            var getFunc = wrapTestObject(function getFunc() {
                    return 10;
                });
            Object.defineProperty(arguments, '0', wrapTestObject({
                get: getFunc,
                set: undefined,
                enumerable: false,
                configurable: false
            }));
            var setFunc = wrapTestObject(function setFunc(value) {
                    this.setVerifyHelpProp = value;
                });
            try {
                Object.defineProperty(arguments, '0', wrapTestObject({ set: setFunc }));
            } catch (e) {
                var verifyFormal = a === 0;
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, undefined, undefined, false, false) && verifyFormal;
            }
            return false;
        })(0, 1, 2);
    });
runTestCase(testcase);