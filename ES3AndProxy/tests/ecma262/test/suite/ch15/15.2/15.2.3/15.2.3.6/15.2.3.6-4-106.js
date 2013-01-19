wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 100,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 200,
        writable: false,
        enumerable: false
    }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 200, false, false, true);
});
runTestCase(testcase);