var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var strObj = wrapTestObject(new String('abc'));
        strObj.writable = true;
        Object.defineProperty(obj, 'property', strObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);