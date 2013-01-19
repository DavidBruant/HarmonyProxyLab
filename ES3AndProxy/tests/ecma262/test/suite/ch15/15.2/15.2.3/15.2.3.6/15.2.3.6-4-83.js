wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: undefined,
        writable: false,
        configurable: false
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: undefined,
        writable: false,
        configurable: false
    }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, false, false);
});
runTestCase(testcase);