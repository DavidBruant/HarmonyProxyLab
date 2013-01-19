wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        String.prototype.writable = true;
        var strObj = wrapTestObject(new String('abc'));
        Object.defineProperty(obj, 'property', strObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    } finally {
        delete String.prototype.writable;
    }
});
runTestCase(testcase);