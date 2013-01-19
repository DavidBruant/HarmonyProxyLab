var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var arrObj = wrapTestObject([
                1,
                2,
                3
            ]);
        arrObj.writable = true;
        Object.defineProperty(obj, 'property', arrObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);