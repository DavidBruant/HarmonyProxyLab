wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ writable: JSON }) }));
    obj.property = 'isWritable';
    return obj.property === 'isWritable';
});
runTestCase(testcase);