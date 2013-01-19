wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
        wrapTestObject(function setFunc(value) {
            this.genericPropertyString = value;
        });
        Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
            set: setFunc,
            enumerable: true,
            configurable: false
        }));
        try {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({ enumerable: false }));
        } catch (e) {
            verifyFormal = c === 3;
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', undefined, setFunc, 'genericPropertyString', true, false) && verifyFormal;
        }
        return false;
    })(1, 2, 3);
});
runTestCase(testcase);