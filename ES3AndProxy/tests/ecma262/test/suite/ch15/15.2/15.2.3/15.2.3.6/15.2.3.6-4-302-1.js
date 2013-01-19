wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
        delete arguments[0];
        wrapTestObject(function getFunc() {
            return 10;
        });
        wrapTestObject(function setFunc(value) {
            this.setVerifyHelpProp = value;
        });
        Object.defineProperty(arguments, '0', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: false,
            configurable: false
        }));
        var verifyFormal = a === 0;
        return accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, setFunc, 'setVerifyHelpProp', false, false) && verifyFormal;
    })(0, 1, 2);
});
runTestCase(testcase);