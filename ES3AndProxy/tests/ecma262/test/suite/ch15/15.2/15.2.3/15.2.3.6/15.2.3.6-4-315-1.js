wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
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
        wrapTestObject(function getFunc() {
            return 'getFunctionString';
        });
        wrapTestObject(function setFunc(value) {
            this.testgetFunction = value;
        });
        Object.defineProperty(arguments, 'genericProperty', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: false,
            configurable: false
        }));
        var verifyFormal = c === 3;
        return accessorPropertyAttributesAreCorrect(arguments, 'genericProperty', getFunc, setFunc, 'testgetFunction', false, false) && verifyFormal;
    })(1, 2, 3);
});
runTestCase(testcase);