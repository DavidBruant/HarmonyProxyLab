var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            JSON.writable = true;
            Object.defineProperty(obj, 'property', JSON);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete JSON.writable;
        }
    });
runTestCase(testcase);