wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({ writable: wrapTestObject(new Boolean(false)) }));
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = obj.property === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);