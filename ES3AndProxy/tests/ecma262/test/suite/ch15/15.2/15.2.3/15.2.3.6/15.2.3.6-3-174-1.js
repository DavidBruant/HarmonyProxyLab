var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Error.prototype.writable = true;
            var errObj = wrapTestObject(new Error());
            Object.defineProperty(obj, 'property', errObj);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Error.prototype.writable;
        }
    });
runTestCase(testcase);