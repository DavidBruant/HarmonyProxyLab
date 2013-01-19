wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 10,
        enumerable: false
    }));
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ enumerable: false }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, false, false);
});
runTestCase(testcase);