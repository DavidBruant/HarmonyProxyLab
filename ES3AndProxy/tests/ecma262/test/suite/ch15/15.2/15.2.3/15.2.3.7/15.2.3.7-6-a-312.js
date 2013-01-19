wrapTestObject(function testcase() {
    var arg = wrapTestObject(function () {
            return arguments;
        })(1, 2, 3);
    wrapTestObject(function setFun(value) {
        arg.genericPropertyString = value;
    });
    Object.defineProperty(arg, 'genericProperty', wrapTestObject({
        set: setFun,
        enumerable: true,
        configurable: false
    }));
    try {
        Object.defineProperties(arg, wrapTestObject({ 'genericProperty': wrapTestObject({ enumerable: false }) }));
        return false;
    } catch (ex) {
        return ex instanceof TypeError && accessorPropertyAttributesAreCorrect(arg, 'genericProperty', undefined, setFun, 'genericPropertyString', true, false);
    }
});
runTestCase(testcase);