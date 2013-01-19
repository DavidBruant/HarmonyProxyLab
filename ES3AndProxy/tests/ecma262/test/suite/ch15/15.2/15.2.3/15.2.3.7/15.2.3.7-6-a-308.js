wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })(1, 2, 3);
    Object.defineProperty(arg, 'genericProperty', wrapTestObject({
        enumerable: true,
        configurable: false
    }));
    try {
        Object.defineProperties(arg, wrapTestObject({ 'genericProperty': wrapTestObject({ enumerable: false }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arg, 'genericProperty', undefined, false, true, false);
    }
});
runTestCase(testcase);