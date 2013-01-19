wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: null,
        writable: false,
        configurable: false
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: null,
        writable: false,
        configurable: false
    }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', null, false, false, false);
});
runTestCase(testcase);