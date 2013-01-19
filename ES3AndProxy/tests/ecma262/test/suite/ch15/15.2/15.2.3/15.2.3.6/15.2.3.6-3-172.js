var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var regObj = wrapTestObject(new RegExp());
        regObj.writable = true;
        Object.defineProperty(obj, 'property', regObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);