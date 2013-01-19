wrapTestObject(function testcase() {
    var arg;
    wrapTestObject(function fun(a, b, c) {
        arg = arguments;
    })(0, 1, 2);
    Object.defineProperties(arg, wrapTestObject({
        '0': wrapTestObject({
            value: 20,
            writable: false,
            enumerable: false,
            configurable: false
        })
    }));
    return dataPropertyAttributesAreCorrect(arg, '0', 20, false, false, false);
});
runTestCase(testcase);