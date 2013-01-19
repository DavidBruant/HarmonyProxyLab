wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })(1, 2, 3);
    Object.defineProperty(arg, 'genericProperty', wrapTestObject({
        value: 1001,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperties(arg, wrapTestObject({
        'genericProperty': wrapTestObject({
            value: 1002,
            enumerable: false,
            configurable: false
        })
    }));
    return dataPropertyAttributesAreCorrect(arg, 'genericProperty', 1002, true, false, false);
});
runTestCase(testcase);