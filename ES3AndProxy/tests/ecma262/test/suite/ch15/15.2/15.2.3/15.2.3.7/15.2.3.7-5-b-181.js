wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ writable: Math }) }));
    obj.property = 'isWritable';
    return obj.property === 'isWritable';
});
runTestCase(testcase);