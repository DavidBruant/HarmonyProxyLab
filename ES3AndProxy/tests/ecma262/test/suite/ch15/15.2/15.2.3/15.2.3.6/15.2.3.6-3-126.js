wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var attr = wrapTestObject({ value: 100 });
    Object.defineProperty(obj, 'property', attr);
    return obj.property === 100;
});
runTestCase(testcase);