wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({ writable: wrapTestObject(new RegExp()) }));
    var beforeWrite = obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    obj.property = 'isWritable';
    var afterWrite = obj.property === 'isWritable';
    return beforeWrite && afterWrite;
});
runTestCase(testcase);