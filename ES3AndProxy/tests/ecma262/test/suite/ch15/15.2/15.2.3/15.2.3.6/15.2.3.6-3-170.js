wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Math.writable = true;
        Object.defineProperty(obj, 'property', Math);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    } finally {
        delete Math.writable;
    }
});
runTestCase(testcase);