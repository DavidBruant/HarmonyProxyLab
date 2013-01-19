wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var dateObj = wrapTestObject(new Date());
    dateObj.writable = true;
    Object.defineProperty(obj, 'property', dateObj);
    var beforeWrite = obj.hasOwnProperty('property');
    obj.property = 'isWritable';
    var afterWrite = obj.property === 'isWritable';
    return beforeWrite === true && afterWrite === true;
});
runTestCase(testcase);