wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
        wrapTestObject(function setFunc(value) {
            this.genericPropertyString = value;
        });
        Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
            set: setFunc,
            configurable: false
        }));
        try {
            Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
                set: wrapTestObject(function (value) {
                    this.genericPropertyString1 = value;
                })
            }));
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', undefined, setFunc, 'genericPropertyString', false, false, false);
        }
        return false;
    })(1, 2, 3);
});
runTestCase(testcase);