wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })(1, 2, 3);
    Object.defineProperties(arg, wrapTestObject({
        'genericProperty': wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        })
    }));
    return dataPropertyAttributesAreCorrect(arg, 'genericProperty', 1001, true, true, true);
});
runTestCase(testcase);