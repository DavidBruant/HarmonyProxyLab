wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    Object.defineProperty(obj, 'prop', wrapTestObject({
        value: 1001,
        writable: false,
        configurable: true
    }));
    Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1002 }));
    return dataPropertyAttributesAreCorrect(obj, 'prop', 1002, false, false, true);
});
runTestCase(testcase);