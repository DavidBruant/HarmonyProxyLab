wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var errObj = wrapTestObject(new Error());
    errObj.writable = true;
    Object.defineProperty(obj, 'property', errObj);
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = obj.property === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);