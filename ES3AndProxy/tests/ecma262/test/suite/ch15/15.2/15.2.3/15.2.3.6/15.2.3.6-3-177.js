wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        fnGlobalObject().writable = true;
        Object.defineProperty(obj, 'property', fnGlobalObject());
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    } finally {
        delete fnGlobalObject().writable;
    }
});
runTestCase(testcase);