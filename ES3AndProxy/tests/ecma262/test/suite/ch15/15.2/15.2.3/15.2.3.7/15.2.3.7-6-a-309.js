wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })(1, 2, 3);
    Object.defineProperty(arg, 'genericProperty', wrapTestObject({ configurable: false }));
    try {
        Object.defineProperties(arg, wrapTestObject({ 'genericProperty': wrapTestObject({ configurable: true }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arg, 'genericProperty', undefined, false, false, false);
    }
});
runTestCase(testcase);