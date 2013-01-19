wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = 'abcd';
    Object.defineProperty(obj, 'foo', wrapTestObject({ value: 'fghj' }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 'fghj', true, true, true);
});
runTestCase(testcase);