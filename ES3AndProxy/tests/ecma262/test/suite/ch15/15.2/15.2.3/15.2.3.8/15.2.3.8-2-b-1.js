wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    var preCheck = Object.isExtensible(obj);
    Object.seal(obj);
    return preCheck && dataPropertyAttributesAreCorrect(obj, 'foo', 10, true, true, false);
});
runTestCase(testcase);