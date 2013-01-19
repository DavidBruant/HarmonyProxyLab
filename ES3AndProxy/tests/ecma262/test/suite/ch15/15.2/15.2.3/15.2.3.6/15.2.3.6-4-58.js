wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    obj.foo = 101;
    Object.defineProperty(obj, 'foo', wrapTestObject({}));
    return dataPropertyAttributesAreCorrect(obj, 'foo', 101, true, true, true);
});
runTestCase(testcase);