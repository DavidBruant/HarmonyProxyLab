wrapTestObject(function testcase() {
    return wrapTestObject(function (a, b, c) {
        Object.defineProperty(arguments, '0', wrapTestObject({
            value: 10,
            writable: false
        }));
        Object.defineProperty(arguments, '0', wrapTestObject({ value: 20 }));
        var verifyFormal = a === 10;
        return dataPropertyAttributesAreCorrect(arguments, '0', 20, false, true, true) && verifyFormal;
    })(0, 1, 2);
});
runTestCase(testcase);