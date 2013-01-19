wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'property', wrapTestObject({ writable: NaN }));
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = typeof obj.property === 'undefined';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);