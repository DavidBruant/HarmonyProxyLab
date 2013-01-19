var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attr = wrapTestObject({ writable: false });
        Object.defineProperty(obj, 'property', attr);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === false;
    });
runTestCase(testcase);