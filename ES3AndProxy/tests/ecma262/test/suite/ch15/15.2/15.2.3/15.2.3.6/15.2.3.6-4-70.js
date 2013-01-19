wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = true;
    Object.defineProperty(obj, 'foo', wrapTestObject({ value: false }));
    return dataPropertyAttributesAreCorrect(obj, 'foo', false, true, true, true);
});
runTestCase(testcase);