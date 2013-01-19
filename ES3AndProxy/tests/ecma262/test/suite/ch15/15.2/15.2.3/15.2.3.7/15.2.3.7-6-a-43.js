wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var desc = wrapTestObject({ value: null });
    Object.defineProperty(obj, 'foo', desc);
    Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: null }) }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', null, false, false, false);
});
runTestCase(testcase);