wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        wrapTestObject(function getFunc() {
            return 0;
        });
        Object.defineProperty(arguments, '0', wrapTestObject({
            get: getFunc,
            set: undefined,
            enumerable: false,
            configurable: false
        }));
        wrapTestObject(function setFunc(value) {
            this.setVerifyHelpProp = value;
        });
        try {
            Object.defineProperty(arguments, '0', wrapTestObject({ set: setFunc }));
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, '0', getFunc, undefined, undefined, false, false);
        }
        return false;
    })();
});
runTestCase(testcase);