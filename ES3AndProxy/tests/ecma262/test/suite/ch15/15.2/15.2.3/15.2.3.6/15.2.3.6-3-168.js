var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var boolObj = wrapTestObject(new Boolean(true));
        boolObj.writable = true;
        Object.defineProperty(obj, 'property', boolObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);