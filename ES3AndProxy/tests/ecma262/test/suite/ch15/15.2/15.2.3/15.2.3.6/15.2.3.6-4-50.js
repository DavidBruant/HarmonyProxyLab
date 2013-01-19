wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({
        value: 1001,
        writable: true,
        enumerable: true
    }));
    return dataPropertyAttributesAreCorrect(obj, 'property', 1001, true, true, false);
});
runTestCase(testcase);