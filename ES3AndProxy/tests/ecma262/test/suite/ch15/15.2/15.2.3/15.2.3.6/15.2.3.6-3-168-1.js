var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Boolean.prototype.writable = true;
            var boolObj = wrapTestObject(new Boolean(true));
            Object.defineProperty(obj, 'property', boolObj);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Boolean.prototype.writable;
        }
    });
runTestCase(testcase);