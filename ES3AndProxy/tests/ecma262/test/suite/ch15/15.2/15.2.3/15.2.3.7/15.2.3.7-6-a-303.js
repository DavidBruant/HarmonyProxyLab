wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })(1, 2, 3);
    wrapTestObject(function getFun() {
        return 'getFunctionString';
    });
    wrapTestObject(function setFun(value) {
        arg.testGetFunction = value;
    });
    Object.defineProperties(arg, wrapTestObject({
        'genericProperty': wrapTestObject({
            get: getFun,
            set: setFun,
            enumerable: true,
            configurable: true
        })
    }));
    return accessorPropertyAttributesAreCorrect(arg, 'genericProperty', getFun, setFun, 'testGetFunction', true, true);
});
runTestCase(testcase);