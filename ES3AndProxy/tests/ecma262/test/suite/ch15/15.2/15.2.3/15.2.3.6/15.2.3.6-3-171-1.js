var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Date.prototype.writable = true;
            dateObj = wrapTestObject(new Date());
            Object.defineProperty(obj, 'property', dateObj);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Date.prototype.writable;
        }
    });
runTestCase(testcase);