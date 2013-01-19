wrapTestObject(function testcase() {
    return wrapTestObject(function () {
        wrapTestObject(function getFunc() {
            return 'getFunctionString';
        });
        wrapTestObject(function setFunc(value) {
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