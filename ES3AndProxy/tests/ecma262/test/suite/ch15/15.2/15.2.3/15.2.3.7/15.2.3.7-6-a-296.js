wrapTestObject(function testcase() {
    var arg;
    wrapTestObject(function fun() {
        arg = arguments;
    })();
    Object.defineProperty(arg, '0', wrapTestObject({
        value: 0,
        writable: false,
        enumerable: true,
        configurable: false
    }));
    try {
        Object.defineProperties(arg, wrapTestObject({ '0': wrapTestObject({ enumerable: false }) }));
        return false;
    } catch (e) {
        return e instanceof TypeError && dataPropertyAttributesAreCorrect(arg, '0', 0, false, true, false);
    }
});
runTestCase(testcase);