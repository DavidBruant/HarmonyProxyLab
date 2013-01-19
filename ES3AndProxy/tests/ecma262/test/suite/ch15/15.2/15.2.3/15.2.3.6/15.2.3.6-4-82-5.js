wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 1001,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({
        enumerable: false,
        configurable: false
    }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 1001, true, false, false);
});
runTestCase(testcase);