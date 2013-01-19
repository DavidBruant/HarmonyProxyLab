wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ value: 'abc' }) }));
    obj.property = 'isWritable';
    return obj.property === 'abc';
});
runTestCase(testcase);